import { resolveForwardRef } from "@angular/core";
import { AccountService } from "src/app/_services/account.service";


export function appInitializer(accountService: AccountService) {
    return () => accountService.refreshToken()
    }