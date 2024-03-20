import { RouteObject, useNavigate } from 'react-router-dom'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useGithubToken } from '@/hooks/useLocalStorage'

const formSchema = z.object({
  username: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }).max(
    22,{
      message: "Username must must be not more than 22 characters",

    }
  ),

  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }).max(25,{
    message: "Password must be not more than 25 characters.",

  }),
})


  function Login() {

    const {githubTokenSetter} = useGithubToken()
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password:""
      },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
      // TODO use values to validate login
      githubTokenSetter()
      navigate('/')
    
    }
    return (
      <div className='w-full h-full flex flex-row justify-center items-center shrink-0'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-[400px]">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter yours username" {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter yours password" type='password' {...field} />
                </FormControl>
                <FormDescription>
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      </div>
  )
}


export const LoginRoute:RouteObject ={
    path:'/login',element:<Login/>
}