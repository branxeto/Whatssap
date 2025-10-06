import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faMoon} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const Home = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className=" flex flex-col w-screen h-screen p-5">
      <nav className="fixed-top top-0 left-0 z-50 w-full px-5">
        <div className="rounded-base border-border border-2 flex items-center justify-between w-full px-5 py-3 bg-main">
          <a href="/">  
            <h1 className="inline text-foreground text-2xl">ChatWhatssap</h1>
          </a>
          <div className="flex items-center justify-between space-x-4">
            <a href="#" className='text-foreground'>about</a>
            <div className="flex items-center space-x-1">
              <Switch id="dark-mode" checked={darkMode} onCheckedChange={setDarkMode} />
              <Label htmlFor="dark-mode">
                <FontAwesomeIcon className='fa-lg' icon={darkMode ? faMoon : faSun} />
              </Label>
            </div>
          </div>
        </div>
      </nav>
      <div className='my-auto mx-auto w-2/3'>
        <Card className='w-full bg-main'>
          <CardHeader>
            <CardTitle>
              <h1 className='text-2xl text-center'>Welcome to ChatWhatssap</h1>
            </CardTitle>
            <CardDescription className='text-foreground text-center'>
              This is a simple chat application that allows you to chat with your friends and family.
              <br />
              <br />
              <strong>Note:</strong> This is a demo application and does not have any real functionality.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className='text-foreground text-center'>
              This application is built with React, TypeScript, and Tailwind CSS.
            </p>
            <br/>
            <div className='flex items-center justify-center space-x-2'>
              <Button onClick={() => {window.location.href = "/login"}}>Login</Button>
              <Button onClick={() => {window.location.href = "/register"}}>Register</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
