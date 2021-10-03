/**
 * It is a "Structural directives".
 * It shows component if the project isn't in production.
 */
import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {environment} from "../../../environments/environment";

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[isProduction]'
})
export class IsProductionDirective implements OnInit{
  /**
   * Store if the current component is visibile
   * @private
   */
  private hasView = false;
  /**
   * Detect the production state
   * @private
   */
  private production: boolean = environment.production;

  constructor(private templateRef: TemplateRef<any>,
              private vcr: ViewContainerRef,
  ) {}

  /**
   * On init check if project is in production and if is visibile and force show component
   */
  ngOnInit(): void {
    if (!this.production && !this.hasView) {
      this.vcr.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (this.production && this.hasView) {
      this.vcr.clear();
      this.hasView = false;
    }
  }

}
