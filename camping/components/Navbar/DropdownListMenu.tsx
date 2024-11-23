import { AlignLeft } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import Usericon from './Usericon';
import Link from 'next/link';
import { links } from '@/utils/link';
import SignOutLinks from './SignOutLinks';
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';



const DropdownListMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    <AlignLeft />
                    <Usericon />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {/*logout success*/}
                <SignedOut>
                    <DropdownMenuItem>
                        <SignInButton mode='modal'>
                            <button>
                                Login
                            </button>
                        </SignInButton>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <SignUpButton mode='modal'>
                            <button>
                                Register
                            </button>
                        </SignUpButton>
                    </DropdownMenuItem>


                </SignedOut>

                {/*login success*/}
                <SignedIn>
                    {
                        links.map((item, index) => {
                            return (
                                <DropdownMenuItem key={index}>
                                    <Link href={item.href}>{item.label}</Link>
                                </DropdownMenuItem>
                            )
                        })
                    }
                    <DropdownMenuItem>
                        <SignOutLinks />
                    </DropdownMenuItem>
                </SignedIn>



            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default DropdownListMenu