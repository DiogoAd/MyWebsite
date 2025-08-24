import { useToast } from "@/hooks/use-toast"

export const useCopyEmail = () => {
  const { toast } = useToast()
  const email = "diogojoseadao@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    toast({
      title: "Email Copied",
      description: `The email ${email} has been copied to your clipboard.`,
    })
  }

  return { copyEmail }
}
