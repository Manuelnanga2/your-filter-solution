
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { services, waLink } from "@/components/site";
import { supabase } from "@/lib/supabase";

const schema = z.object({
  nome: z.string().trim().min(2, "Indique o seu nome").max(100),
  telefone: z.string().trim().min(9, "Telefone inválido").max(20).regex(/^[+\d\s()-]+$/, "Telefone inválido"),
  email: z.string().trim().email("Email inválido").max(255),
  endereco: z.string().trim().min(3, "Indique o endereço").max(200),
  servico: z.string().min(1, "Escolha um serviço"),
  mensagem: z.string().trim().max(1000).optional(),
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/30";

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const r = schema.safeParse(data);

    if (!r.success) {
      setErrors(
        Object.fromEntries(
          r.error.issues.map((i) => [String(i.path[0]), i.message])
        )
      );
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const d = r.data;

      const { error } = await supabase
        .from("orcamentos")
        .insert({
          nome: d.nome,
          telefone: d.telefone,
          email: d.email,
          endereco: d.endereco,
          servico: d.servico,
          mensagem: d.mensagem || null,
        });

      if (error) {
        console.error("Erro Supabase:", error);
        toast.error("Não foi possível guardar o pedido. Tente novamente.");
        return;
      }

      const text = `Pedido de orçamento — Meta Filtros
Nome: ${d.nome}
Telefone: ${d.telefone}
Email: ${d.email}
Endereço: ${d.endereco}
Serviço: ${d.servico}
Mensagem: ${d.mensagem || "-"}`;

      window.open(waLink(text), "_blank", "noopener");

      toast.success("Pedido guardado com sucesso!");
      form.reset();

    } catch (error) {
      console.error(error);
      toast.error("Ocorreu um erro ao enviar o pedido.");
    } finally {
      setLoading(false);
    }
  }

  const err = (k: string) =>
    errors[k] && (
      <p className="mt-1 text-sm text-destructive">{errors[k]}</p>
    );

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-3xl border bg-card p-7 shadow-soft md:grid-cols-2 md:p-10"
      noValidate
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium">Nome</label>
        <input name="nome" className={field} maxLength={100} />
        {err("nome")}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Telefone</label>
        <input name="telefone" type="tel" className={field} maxLength={20} placeholder="+244" />
        {err("telefone")}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Email</label>
        <input name="email" type="email" className={field} maxLength={255} />
        {err("email")}
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">Endereço</label>
        <input name="endereco" className={field} maxLength={200} placeholder="Bairro, município" />
        {err("endereco")}
      </div>

      <div className="md:col-span-2">
        <label className="mb-1.5 block text-sm font-medium">Tipo de Serviço</label>
        <select name="servico" className={field} defaultValue="">
          <option value="" disabled>Selecione…</option>
          {services.map((s) => (
            <option key={s.t}>{s.t}</option>
          ))}
          <option>Compra de produtos</option>
        </select>
        {err("servico")}
      </div>

      <div className="md:col-span-2">
        <label className="mb-1.5 block text-sm font-medium">Mensagem</label>
        <textarea name="mensagem" rows={5} className={field} maxLength={1000} />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-gradient-brand px-8 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:opacity-50 md:col-span-2"
      >
        {loading ? "A enviar..." : "Enviar pedido"}
      </button>
    </form>
  );
}
