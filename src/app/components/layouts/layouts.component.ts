import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { AsideComponent } from "./aside/aside.component";
import { FooterComponent } from "./footer/footer.component";
import { LeftAsideComponent } from "./left-aside/left-aside.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-layouts',
    standalone: true,
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.css',
    imports: [RouterModule,RouterOutlet, NavbarComponent, AsideComponent, FooterComponent, LeftAsideComponent]
})
export class LayoutsComponent {

}
