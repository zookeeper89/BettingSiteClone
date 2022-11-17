import { Menu, Button, Divider } from "@mantine/core";
import { Bars3Icon, AcademicCapIcon  } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import CreateAccount from "components/Account/CreateAccount";
import Login from "components/Account/Login";
import useUser from "utils/functions/user";
import { useSession, signIn, signOut } from "next-auth/react";

export default function DropdownLoggedIn(props) {
  const [loginbar, setLoginbar] = useState(props?.loginModal ?? false);
  const [createAccount, setCreateAccount] = useState(false);
  const user = useUser();
  return (
    <div>
      <Menu
        withArrow
        position="bottom-end"
        offset={18}
        transition="rotate-right"
        transitionDuration={150}
      >
        <Menu.Target>
          <Button className="hover:bg-white">
            <Bars3Icon className="h-6 text-gray-600" />
          </Button>
        </Menu.Target>

        <Menu.Dropdown className="rounded-xl">
          <Menu.Item onClick={() => setCreateAccount(!createAccount)}>
            DU ER LOGGET IND NU
          </Menu.Item>
          <Menu.Item onClick={() => setLoginbar(!loginbar)}>Log ind</Menu.Item>
          <Divider />
          <Menu.Item>{user?.email}</Menu.Item>
          <Menu.Item component="a" href="/udlejer/profil">Dashboard</Menu.Item>
          <Menu.Item onClick={() => signOut()}>Log ud</Menu.Item>

          {/* Other items ... */}
        </Menu.Dropdown>
      </Menu>
      <Login loginbar={loginbar} setLoginbar={setLoginbar} />
      <CreateAccount loginbar={createAccount} setLoginbar={setCreateAccount} />
    </div>
  );
}
