import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: "om-border-beam",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-border-beam.component.html",
  styleUrl: "./ngx-border-beam.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBorderBeamComponent {
  @Input("gradientColorStart")
  set colorFrom(color: string) {
    this.style["--color-from"] = color;
  }

  @Input("gradientColorEnd")
  set colorTo(color: string) {
    this.style["--color-to"] = color;
  }

  @Input("borderRadius")
  set borderRadius(radius: string) {
    this.style["--border-radius"] = radius;
  }

  @Input("borderColor")
  set borderColor(color: string) {
    this.style["--border-color"] = color;
  }

  @Input("animationDuration")
  set animationDuration(duration: string) {
    this.style["--animation-duration"] = duration;
  }

  @Input("cubeSize")
  set cubeSize(cubeSize: string) {
    this.style["--border-cube-size"] = cubeSize;
  }

  @Input("styleClass")
  styleClass?: string;

  style: any = {};
}
