import {
  Directive,
  Input,
  ElementRef,
  Renderer,
  HostListener
} from "@angular/core";

/* #region The Directive with seletor for "propertyBinding" */
/* #endregion */
@Directive({
  selector: "[setColor]"
})
export class ColorDirective {
  // the ctor accept dependencies for ElementRef & Render
  // these objects will be provided by BrowserModule
  constructor(private ele: ElementRef, private render: Renderer) {}
  /* #region Propeties for Class, map the property to directive selector, to accept input */
  @Input("setColor") setColor: string;
  /* #endregion */

  /* #region The Method that will change rendering of DOM element */
  private applyColor(color: string): void {
    this.render.setElementStyle(
      this.ele.nativeElement,
      "backgroundColor",
      color
    );
  }

  /* #endregion */

  /* #region Methods those will be hosting events to execute logic for Directive 
    The HostListener class will be used to host event for methods*/
  @HostListener("mouseenter")
  onMouseEnter(): void {
    this.applyColor(this.setColor || "cyan");
  }
  @HostListener("mouseleave")
  onMouseLeave(): void {
    this.applyColor(null);
  }
  /* #endregion */
}
