import { UserIcon } from "./ui/icons"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function Header() {
  return (
    <header className="sticky top-0 inset-x-0 bg-white border-b border-border px-5 py-4">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto w-full">
        <h1>Moms Cafe</h1>
          <Menubar>
            <MenubarMenu>
                <MenubarTrigger><UserIcon /></MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Change Password</MenubarItem>
                  <MenubarItem>Sign Out</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
          </Menubar>
      
      </div>
    </header>
  )
}