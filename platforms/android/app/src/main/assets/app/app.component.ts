import { Component} from "@angular/core";
import { ContactsService } from "./services/contacts.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor(private ContactsService: ContactsService) {
    }
}


