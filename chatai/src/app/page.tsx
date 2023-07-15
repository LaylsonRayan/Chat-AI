import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50 item-center justify-center">
      <Card className="w=[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using a Vercel SDK for made a chatbot </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <p className="leading-relaxed">
              <span className="black font-bold text-slate-700">Humano:</span>
              Whats is your opnion about this world?
            </p>
          </div>

          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>IA</AvatarFallback>              
            </Avatar>
            <p className="leading-relaxed">
              <span className="black font-bold text-slate-700">Humano:</span>
              As an Ai assistent, i dont have have a personal opnion
            </p>
          </div>
        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can i help you today?"/>
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
