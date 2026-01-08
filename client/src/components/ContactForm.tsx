import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  message: z.string().min(10, "Mensagem muito curta"),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call since we don't have a backend endpoint for messages yet
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
        className: "bg-primary text-primary-foreground border-none",
      });
      form.reset();
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Nome Completo</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    {...field} 
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 h-12" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Telefone / WhatsApp</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="(00) 00000-0000" 
                    {...field} 
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 h-12" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Email</FormLabel>
              <FormControl>
                <Input 
                  placeholder="seu@email.com" 
                  {...field} 
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 h-12" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Como podemos ajudar?</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Descreva brevemente seu caso..." 
                  {...field} 
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 min-h-[120px] resize-none" 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-12 bg-gradient-to-r from-primary to-[#f1d063] text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
