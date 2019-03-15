import { Component, Input } from "@angular/core";

@Component({
  selector: "bs-header",
  templateUrl: "header.html"
})
export class HeaderComponent {
  @Input() nomePagina: string;
  @Input() nomeIcone: string;

  constructor() {}
}
