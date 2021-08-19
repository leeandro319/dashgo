import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>
      <NavSection title="AUTOMAÇÂO">
        <NavLink href="/forms" icon={RiDashboardLine}>
          Formulários
        </NavLink>
        <NavLink href="/automation" icon={RiContactsLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}