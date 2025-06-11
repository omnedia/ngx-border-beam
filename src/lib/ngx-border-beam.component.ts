import {CommonModule, isPlatformBrowser} from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from "@angular/core";

@Component({
  selector: "om-border-beam",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./ngx-border-beam.component.html",
  styleUrl: "./ngx-border-beam.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxBorderBeamComponent implements AfterViewInit, OnDestroy {
  @ViewChild("OmBorderBeamWrapper") borderBeamRef!: ElementRef<HTMLElement>;

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

  isInView = signal(false);
  private intersectionObserver?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.isInView.set(entry.isIntersecting);
      });
      this.intersectionObserver.observe(this.borderBeamRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}
