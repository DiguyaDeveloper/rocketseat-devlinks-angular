import { Component } from "@angular/core"

@Component({
  selector: "app-toggle",
  templateUrl: "./toggle.component.html",
  styleUrls: ["./toggle.component.scss"],
})
export class ToggleComponent {
  toggleMode(): void {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
      img?.setAttribute("src", "./assets/icon/avatar-light.png")
    } else {
      img?.setAttribute("src", "./assets/icon/avatar.png")
    }
  }
}
