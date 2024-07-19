import {
  DetalisService,
  Fieldset,
  FieldsetModule,
  SearchResultsService,
  Toolbar,
  ToolbarModule
} from "./chunk-GT4EGSGA.js";
import {
  Card,
  CardModule,
  Divider,
  DividerModule
} from "./chunk-HQTD67V5.js";
import {
  ActivatedRoute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  CustomButtonComponent,
  DOCUMENT,
  DatePipe,
  DomHandler,
  ElementRef,
  Inject,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  PLATFORM_ID,
  PrimeTemplate,
  Renderer2,
  RouterModule,
  SharedModule,
  UniqueComponentId,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  isPlatformBrowser,
  numberAttribute,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7RT3DARY.js";

// node_modules/primeng/fesm2022/primeng-scrollpanel.mjs
var _c0 = ["container"];
var _c1 = ["content"];
var _c2 = ["xBar"];
var _c3 = ["yBar"];
var _c4 = ["*"];
function ScrollPanel_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var ScrollPanel = class _ScrollPanel {
  platformId;
  el;
  zone;
  cd;
  document;
  renderer;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Step factor to scroll the content while pressing the arrow keys.
   * @group Props
   */
  step = 5;
  containerViewChild;
  contentViewChild;
  xBarViewChild;
  yBarViewChild;
  templates;
  scrollYRatio;
  scrollXRatio;
  timeoutFrame = (fn) => setTimeout(fn, 0);
  initialized = false;
  lastPageY;
  lastPageX;
  isXBarClicked = false;
  isYBarClicked = false;
  contentTemplate;
  lastScrollLeft = 0;
  lastScrollTop = 0;
  orientation = "vertical";
  timer;
  contentId;
  windowResizeListener;
  contentScrollListener;
  mouseEnterListener;
  xBarMouseDownListener;
  yBarMouseDownListener;
  documentMouseMoveListener;
  documentMouseUpListener;
  constructor(platformId, el, zone, cd, document2, renderer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.cd = cd;
    this.document = document2;
    this.renderer = renderer;
    this.contentId = UniqueComponentId() + "_content";
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.moveBar();
        this.moveBar = this.moveBar.bind(this);
        this.onXBarMouseDown = this.onXBarMouseDown.bind(this);
        this.onYBarMouseDown = this.onYBarMouseDown.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentMouseUp = this.onDocumentMouseUp.bind(this);
        this.windowResizeListener = this.renderer.listen(window, "resize", this.moveBar);
        this.contentScrollListener = this.renderer.listen(this.contentViewChild.nativeElement, "scroll", this.moveBar);
        this.mouseEnterListener = this.renderer.listen(this.contentViewChild.nativeElement, "mouseenter", this.moveBar);
        this.xBarMouseDownListener = this.renderer.listen(this.xBarViewChild.nativeElement, "mousedown", this.onXBarMouseDown);
        this.yBarMouseDownListener = this.renderer.listen(this.yBarViewChild.nativeElement, "mousedown", this.onYBarMouseDown);
        this.calculateContainerHeight();
        this.initialized = true;
      });
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  calculateContainerHeight() {
    let container = this.containerViewChild.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    const window2 = this.document.defaultView;
    let containerStyles = window2.getComputedStyle(container), xBarStyles = window2.getComputedStyle(xBar), pureContainerHeight = DomHandler.getHeight(container) - parseInt(xBarStyles["height"], 10);
    if (containerStyles["max-height"] != "none" && pureContainerHeight == 0) {
      if (content.offsetHeight + parseInt(xBarStyles["height"], 10) > parseInt(containerStyles["max-height"], 10)) {
        container.style.height = containerStyles["max-height"];
      } else {
        container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
      }
    }
  }
  moveBar() {
    let container = this.containerViewChild.nativeElement;
    let content = this.contentViewChild.nativeElement;
    let xBar = this.xBarViewChild.nativeElement;
    let totalWidth = content.scrollWidth;
    let ownWidth = content.clientWidth;
    let bottom = (container.clientHeight - xBar.clientHeight) * -1;
    this.scrollXRatio = ownWidth / totalWidth;
    let yBar = this.yBarViewChild.nativeElement;
    let totalHeight = content.scrollHeight;
    let ownHeight = content.clientHeight;
    let right = (container.clientWidth - yBar.clientWidth) * -1;
    this.scrollYRatio = ownHeight / totalHeight;
    this.requestAnimationFrame(() => {
      if (this.scrollXRatio >= 1) {
        xBar.setAttribute("data-p-scrollpanel-hidden", "true");
        DomHandler.addClass(xBar, "p-scrollpanel-hidden");
      } else {
        xBar.setAttribute("data-p-scrollpanel-hidden", "false");
        DomHandler.removeClass(xBar, "p-scrollpanel-hidden");
        const xBarWidth = Math.max(this.scrollXRatio * 100, 10);
        const xBarLeft = content.scrollLeft * (100 - xBarWidth) / (totalWidth - ownWidth);
        xBar.style.cssText = "width:" + xBarWidth + "%; left:" + xBarLeft + "%;bottom:" + bottom + "px;";
      }
      if (this.scrollYRatio >= 1) {
        yBar.setAttribute("data-p-scrollpanel-hidden", "true");
        DomHandler.addClass(yBar, "p-scrollpanel-hidden");
      } else {
        yBar.setAttribute("data-p-scrollpanel-hidden", "false");
        DomHandler.removeClass(yBar, "p-scrollpanel-hidden");
        const yBarHeight = Math.max(this.scrollYRatio * 100, 10);
        const yBarTop = content.scrollTop * (100 - yBarHeight) / (totalHeight - ownHeight);
        yBar.style.cssText = "height:" + yBarHeight + "%; top: calc(" + yBarTop + "% - " + xBar.clientHeight + "px);right:" + right + "px;";
      }
    });
    this.cd.markForCheck();
  }
  onScroll(event) {
    if (this.lastScrollLeft !== event.target.scrollLeft) {
      this.lastScrollLeft = event.target.scrollLeft;
      this.orientation = "horizontal";
    } else if (this.lastScrollTop !== event.target.scrollTop) {
      this.lastScrollTop = event.target.scrollTop;
      this.orientation = "vertical";
    }
    this.moveBar();
  }
  onKeyDown(event) {
    if (this.orientation === "vertical") {
      switch (event.code) {
        case "ArrowDown": {
          this.setTimer("scrollTop", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          this.setTimer("scrollTop", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowLeft":
        case "ArrowRight": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    } else if (this.orientation === "horizontal") {
      switch (event.code) {
        case "ArrowRight": {
          this.setTimer("scrollLeft", this.step);
          event.preventDefault();
          break;
        }
        case "ArrowLeft": {
          this.setTimer("scrollLeft", this.step * -1);
          event.preventDefault();
          break;
        }
        case "ArrowDown":
        case "ArrowUp": {
          event.preventDefault();
          break;
        }
        default:
          break;
      }
    }
  }
  onKeyUp() {
    this.clearTimer();
  }
  repeat(bar, step) {
    this.contentViewChild.nativeElement[bar] += step;
    this.moveBar();
  }
  setTimer(bar, step) {
    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(bar, step);
    }, 40);
  }
  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  bindDocumentMouseListeners() {
    if (!this.documentMouseMoveListener) {
      this.documentMouseMoveListener = (e) => {
        this.onDocumentMouseMove(e);
      };
      this.document.addEventListener("mousemove", this.documentMouseMoveListener);
    }
    if (!this.documentMouseUpListener) {
      this.documentMouseUpListener = (e) => {
        this.onDocumentMouseUp(e);
      };
      this.document.addEventListener("mouseup", this.documentMouseUpListener);
    }
  }
  unbindDocumentMouseListeners() {
    if (this.documentMouseMoveListener) {
      this.document.removeEventListener("mousemove", this.documentMouseMoveListener);
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      document.removeEventListener("mouseup", this.documentMouseUpListener);
      this.documentMouseUpListener = null;
    }
  }
  onYBarMouseDown(e) {
    this.isYBarClicked = true;
    this.yBarViewChild.nativeElement.focus();
    this.lastPageY = e.pageY;
    this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed", "true");
    DomHandler.addClass(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "true");
    DomHandler.addClass(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onXBarMouseDown(e) {
    this.isXBarClicked = true;
    this.xBarViewChild.nativeElement.focus();
    this.lastPageX = e.pageX;
    this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed", "false");
    DomHandler.addClass(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    DomHandler.addClass(this.document.body, "p-scrollpanel-grabbed");
    this.bindDocumentMouseListeners();
    e.preventDefault();
  }
  onDocumentMouseMove(e) {
    if (this.isXBarClicked) {
      this.onMouseMoveForXBar(e);
    } else if (this.isYBarClicked) {
      this.onMouseMoveForYBar(e);
    } else {
      this.onMouseMoveForXBar(e);
      this.onMouseMoveForYBar(e);
    }
  }
  onMouseMoveForXBar(e) {
    let deltaX = e.pageX - this.lastPageX;
    this.lastPageX = e.pageX;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollLeft += deltaX / this.scrollXRatio;
    });
  }
  onMouseMoveForYBar(e) {
    let deltaY = e.pageY - this.lastPageY;
    this.lastPageY = e.pageY;
    this.requestAnimationFrame(() => {
      this.contentViewChild.nativeElement.scrollTop += deltaY / this.scrollYRatio;
    });
  }
  /**
   * Scrolls the top location to the given value.
   * @param scrollTop
   * @group Method
   */
  scrollTop(scrollTop) {
    let scrollableHeight = this.contentViewChild.nativeElement.scrollHeight - this.contentViewChild.nativeElement.clientHeight;
    scrollTop = scrollTop > scrollableHeight ? scrollableHeight : scrollTop > 0 ? scrollTop : 0;
    this.contentViewChild.nativeElement.scrollTop = scrollTop;
  }
  onFocus(event) {
    if (this.xBarViewChild.nativeElement.isSameNode(event.target)) {
      this.orientation = "horizontal";
    } else if (this.yBarViewChild.nativeElement.isSameNode(event.target)) {
      this.orientation = "vertical";
    }
  }
  onBlur() {
    if (this.orientation === "horizontal") {
      this.orientation = "vertical";
    }
  }
  onDocumentMouseUp(e) {
    this.yBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed", "false");
    DomHandler.removeClass(this.yBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.xBarViewChild.nativeElement.setAttribute("data-p-scrollpanel-grabbed", "false");
    DomHandler.removeClass(this.xBarViewChild.nativeElement, "p-scrollpanel-grabbed");
    this.document.body.setAttribute("data-p-scrollpanel-grabbed", "false");
    DomHandler.removeClass(this.document.body, "p-scrollpanel-grabbed");
    this.unbindDocumentMouseListeners();
    this.isXBarClicked = false;
    this.isYBarClicked = false;
  }
  requestAnimationFrame(f) {
    let frame = window.requestAnimationFrame || this.timeoutFrame;
    frame(f);
  }
  unbindListeners() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
    if (this.contentScrollListener) {
      this.contentScrollListener();
      this.contentScrollListener = null;
    }
    if (this.mouseEnterListener) {
      this.mouseEnterListener();
      this.mouseEnterListener = null;
    }
    if (this.xBarMouseDownListener) {
      this.xBarMouseDownListener();
      this.xBarMouseDownListener = null;
    }
    if (this.yBarMouseDownListener) {
      this.yBarMouseDownListener();
      this.yBarMouseDownListener = null;
    }
  }
  ngOnDestroy() {
    if (this.initialized) {
      this.unbindListeners();
    }
  }
  /**
   * Refreshes the position and size of the scrollbar.
   * @group Method
   */
  refresh() {
    this.moveBar();
  }
  static \u0275fac = function ScrollPanel_Factory(t) {
    return new (t || _ScrollPanel)(\u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Renderer2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ScrollPanel,
    selectors: [["p-scrollPanel"]],
    contentQueries: function ScrollPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ScrollPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(_c3, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.xBarViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.yBarViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      step: [2, "step", "step", numberAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c4,
    decls: 11,
    vars: 16,
    consts: [["container", ""], ["content", ""], ["xBar", ""], ["yBar", ""], [3, "ngClass", "ngStyle"], [1, "p-scrollpanel-wrapper"], [1, "p-scrollpanel-content", 3, "mouseenter", "scroll"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "scrollbar", 1, "p-scrollpanel-bar", "p-scrollpanel-bar-x", 3, "mousedown", "keydown", "keyup", "focus", "blur"], ["tabindex", "0", "role", "scrollbar", 1, "p-scrollpanel-bar", "p-scrollpanel-bar-y", 3, "mousedown", "keydown", "keyup", "focus"]],
    template: function ScrollPanel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 4, 0)(2, "div", 5)(3, "div", 6, 1);
        \u0275\u0275listener("mouseenter", function ScrollPanel_Template_div_mouseenter_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.moveBar());
        })("scroll", function ScrollPanel_Template_div_scroll_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onScroll($event));
        });
        \u0275\u0275projection(5);
        \u0275\u0275template(6, ScrollPanel_ng_container_6_Template, 1, 0, "ng-container", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 8, 2);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onXBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_7_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        })("blur", function ScrollPanel_Template_div_blur_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBlur());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9, 3);
        \u0275\u0275listener("mousedown", function ScrollPanel_Template_div_mousedown_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onYBarMouseDown($event));
        })("keydown", function ScrollPanel_Template_div_keydown_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("keyup", function ScrollPanel_Template_div_keyup_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyUp());
        })("focus", function ScrollPanel_Template_div_focus_9_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus($event));
        });
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", "p-scrollpanel p-component")("ngStyle", ctx.style);
        \u0275\u0275attribute("data-pc-name", "scrollpanel");
        \u0275\u0275advance(2);
        \u0275\u0275attribute("data-pc-section", "wrapper");
        \u0275\u0275advance();
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate);
        \u0275\u0275advance();
        \u0275\u0275attribute("aria-orientation", "horizontal")("aria-valuenow", ctx.lastScrollLeft)("data-pc-section", "barx")("aria-controls", ctx.contentId);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-orientation", "vertical")("aria-valuenow", ctx.lastScrollTop)("data-pc-section", "bary")("aria-controls", ctx.contentId);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanel, [{
    type: Component,
    args: [{
      selector: "p-scrollPanel",
      template: `
        <div #container [ngClass]="'p-scrollpanel p-component'" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'scrollpanel'">
            <div class="p-scrollpanel-wrapper" [attr.data-pc-section]="'wrapper'">
                <div #content class="p-scrollpanel-content" [attr.data-pc-section]="'content'" (mouseenter)="moveBar()" (scroll)="onScroll($event)">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
                </div>
            </div>
            <div
                #xBar
                class="p-scrollpanel-bar p-scrollpanel-bar-x"
                tabindex="0"
                role="scrollbar"
                [attr.aria-orientation]="'horizontal'"
                [attr.aria-valuenow]="lastScrollLeft"
                [attr.data-pc-section]="'barx'"
                [attr.aria-controls]="contentId"
                (mousedown)="onXBarMouseDown($event)"
                (keydown)="onKeyDown($event)"
                (keyup)="onKeyUp()"
                (focus)="onFocus($event)"
                (blur)="onBlur()"
            ></div>
            <div
                #yBar
                class="p-scrollpanel-bar p-scrollpanel-bar-y"
                tabindex="0"
                role="scrollbar"
                [attr.aria-orientation]="'vertical'"
                [attr.aria-valuenow]="lastScrollTop"
                [attr.data-pc-section]="'bary'"
                [attr.aria-controls]="contentId"
                (mousedown)="onYBarMouseDown($event)"
                (keydown)="onKeyDown($event)"
                (keyup)="onKeyUp()"
                (focus)="onFocus($event)"
            ></div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-scrollpanel-wrapper{overflow:hidden;width:100%;height:100%;position:relative;float:left}.p-scrollpanel-content{height:calc(100% + 18px);width:calc(100% + 18px);padding:0 18px 18px 0;position:relative;overflow:auto;box-sizing:border-box}.p-scrollpanel-bar{position:relative;background:#c1c1c1;border-radius:3px;cursor:pointer;opacity:0;transition:opacity .25s linear}.p-scrollpanel-bar-y{width:9px;top:0}.p-scrollpanel-bar-x{height:9px;bottom:0}.p-scrollpanel-hidden{visibility:hidden}.p-scrollpanel:hover .p-scrollpanel-bar,.p-scrollpanel:active .p-scrollpanel-bar{opacity:1}.p-scrollpanel-grabbed{-webkit-user-select:none;user-select:none}}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Renderer2
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    xBarViewChild: [{
      type: ViewChild,
      args: ["xBar"]
    }],
    yBarViewChild: [{
      type: ViewChild,
      args: ["yBar"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ScrollPanelModule = class _ScrollPanelModule {
  static \u0275fac = function ScrollPanelModule_Factory(t) {
    return new (t || _ScrollPanelModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ScrollPanelModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollPanelModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [ScrollPanel],
      declarations: [ScrollPanel]
    }]
  }], null, null);
})();

// src/app/shared/components/card/card.component.ts
var _c02 = ["*", [["app-custom-button"]]];
var _c12 = ["*", "app-custom-button"];
var _c22 = () => ({ width: "360px", "text-align": "center" });
var _c32 = () => ({ width: "100%", height: "80px" });
function CardComponent_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.config == null ? null : ctx_r0.config.imageUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r0.config == null ? null : ctx_r0.config.imageAlt);
  }
}
function CardComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CardComponent_1_ng_template_0_Template, 1, 2, "ng-template", 2);
  }
}
function CardComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
var _CardComponent = class _CardComponent {
};
_CardComponent.\u0275fac = function CardComponent_Factory(t) {
  return new (t || _CardComponent)();
};
_CardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["app-card"]], inputs: { config: "config" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c12, decls: 7, vars: 8, consts: [[4, "ngIf"], ["pTemplate", "footer"], ["pTemplate", "header"], [1, "pt-2", "pl-2", "pr-2", 3, "src", "alt"], [1, "flex", "gap-3", "mt-1"]], template: function CardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef(_c02);
    \u0275\u0275elementStart(0, "p-card");
    \u0275\u0275template(1, CardComponent_1_Template, 1, 0, null, 0);
    \u0275\u0275elementStart(2, "p-scrollPanel")(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275projection(5);
    \u0275\u0275template(6, CardComponent_ng_template_6_Template, 2, 0, "ng-template", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(6, _c22));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.config == null ? null : ctx.config.imageUrl);
    \u0275\u0275advance();
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(7, _c32));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.config == null ? null : ctx.config.headerText, " ");
  }
}, dependencies: [ScrollPanelModule, ScrollPanel, CardModule, Card, PrimeTemplate, CommonModule, NgIf] });
var CardComponent = _CardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src\\app\\shared\\components\\card\\card.component.ts", lineNumber: 15 });
})();

// src/app/shared/directives/colored-border.directive.ts
var _ColoredBorderDirective = class _ColoredBorderDirective {
  set appColoredBorder(publicationDate) {
    const currentDate = /* @__PURE__ */ new Date();
    const publishedDate = new Date(publicationDate);
    const timeDifference = currentDate.getTime() - publishedDate.getTime();
    const daysDifference = timeDifference / (1e3 * 3600 * 24);
    let borderColor = "transparent";
    if (daysDifference > 180) {
      borderColor = "red";
    } else if (daysDifference > 30) {
      borderColor = "yellow";
    } else if (daysDifference > 7) {
      borderColor = "green";
    } else {
      borderColor = "blue";
    }
    this.renderer.setStyle(this.el.nativeElement, "box-shadow", `0px 11px 17px -7px ${borderColor}`);
  }
  constructor(el, renderer) {
    this.el = el;
    this.renderer = renderer;
  }
};
_ColoredBorderDirective.\u0275fac = function ColoredBorderDirective_Factory(t) {
  return new (t || _ColoredBorderDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_ColoredBorderDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ColoredBorderDirective, selectors: [["", "appColoredBorder", ""]], inputs: { appColoredBorder: "appColoredBorder" }, standalone: true });
var ColoredBorderDirective = _ColoredBorderDirective;

// node_modules/primeng/fesm2022/primeng-tag.mjs
var _c03 = ["*"];
function Tag_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.icon);
  }
}
function Tag_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Tag_ng_container_2_span_1_Template, 1, 1, "span", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.icon);
  }
}
function Tag_span_3_1_ng_template_0_Template(rf, ctx) {
}
function Tag_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Tag_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Tag_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275template(1, Tag_span_3_1_Template, 1, 0, null, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate);
  }
}
var Tag = class _Tag {
  cd;
  /**
   * Inline style of the component.
   * @group Props
   */
  get style() {
    return this._style;
  }
  set style(value) {
    this._style = value;
    this.cd.markForCheck();
  }
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Severity type of the tag.
   * @group Props
   */
  severity;
  /**
   * Value to display inside the tag.
   * @group Props
   */
  value;
  /**
   * Icon of the tag to display next to the value.
   * @group Props
   * @deprecated since 15.4.2. Use 'icon' template.
   */
  icon;
  /**
   * Whether the corners of the tag are rounded.
   * @group Props
   */
  rounded;
  templates;
  iconTemplate;
  _style;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this.iconTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  containerClass() {
    return {
      "p-tag p-component": true,
      [`p-tag-${this.severity}`]: this.severity,
      "p-tag-rounded": this.rounded
    };
  }
  static \u0275fac = function Tag_Factory(t) {
    return new (t || _Tag)(\u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Tag,
    selectors: [["p-tag"]],
    contentQueries: function Tag_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      style: "style",
      styleClass: "styleClass",
      severity: "severity",
      value: "value",
      icon: "icon",
      rounded: [2, "rounded", "rounded", booleanAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c03,
    decls: 6,
    vars: 7,
    consts: [[3, "ngClass", "ngStyle"], [4, "ngIf"], ["class", "p-tag-icon", 4, "ngIf"], [1, "p-tag-value"], ["class", "p-tag-icon", 3, "ngClass", 4, "ngIf"], [1, "p-tag-icon", 3, "ngClass"], [1, "p-tag-icon"], [4, "ngTemplateOutlet"]],
    template: function Tag_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275template(2, Tag_ng_container_2_Template, 2, 1, "ng-container", 1)(3, Tag_span_3_Template, 2, 1, "span", 2);
        \u0275\u0275elementStart(4, "span", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.styleClass);
        \u0275\u0275property("ngClass", ctx.containerClass())("ngStyle", ctx.style);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.iconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.iconTemplate);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.value);
      }
    },
    dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
    styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tag, [{
    type: Component,
    args: [{
      selector: "p-tag",
      template: `
        <span [ngClass]="containerClass()" [class]="styleClass" [ngStyle]="style">
            <ng-content></ng-content>
            <ng-container *ngIf="!iconTemplate">
                <span class="p-tag-icon" [ngClass]="icon" *ngIf="icon"></span>
            </ng-container>
            <span class="p-tag-icon" *ngIf="iconTemplate">
                <ng-template *ngTemplateOutlet="iconTemplate"></ng-template>
            </span>
            <span class="p-tag-value">{{ value }}</span>
        </span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    severity: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    rounded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TagModule = class _TagModule {
  static \u0275fac = function TagModule_Factory(t) {
    return new (t || _TagModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TagModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CommonModule, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Tag, SharedModule],
      declarations: [Tag]
    }]
  }], null, null);
})();

// src/app/features/youtube/components/statistics/statistics.component.ts
var _StatisticsComponent = class _StatisticsComponent {
  constructor() {
    this.statistics = {
      viewCount: "",
      likeCount: "",
      dislikeCount: "",
      favoriteCount: "",
      commentCount: ""
    };
  }
};
_StatisticsComponent.\u0275fac = function StatisticsComponent_Factory(t) {
  return new (t || _StatisticsComponent)();
};
_StatisticsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatisticsComponent, selectors: [["app-statistics"]], inputs: { statistics: "statistics" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [["icon", "pi pi-eye", "severity", "info", 3, "value"], ["icon", "pi pi-comment text-xs", 3, "value"], ["icon", "pi pi-thumbs-up", "severity", "success", 3, "value"], ["icon", "pi pi-thumbs-down", "severity", "danger", 3, "value"]], template: function StatisticsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-toolbar");
    \u0275\u0275element(1, "p-tag", 0)(2, "p-tag", 1)(3, "p-tag", 2)(4, "p-tag", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.statistics == null ? null : ctx.statistics.viewCount);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.statistics == null ? null : ctx.statistics.commentCount);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.statistics == null ? null : ctx.statistics.likeCount);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx.statistics == null ? null : ctx.statistics.dislikeCount);
  }
}, dependencies: [ToolbarModule, Toolbar, TagModule, Tag], encapsulation: 2 });
var StatisticsComponent = _StatisticsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatisticsComponent, { className: "StatisticsComponent", filePath: "src\\app\\features\\youtube\\components\\statistics\\statistics.component.ts", lineNumber: 13 });
})();

// src/app/features/youtube/services/search-item.service.ts
var _SearchItemService = class _SearchItemService {
  constructor(detalisService) {
    this.detalisService = detalisService;
  }
  openDetalis(id) {
    this.detalisService.openDetalis(id);
  }
};
_SearchItemService.\u0275fac = function SearchItemService_Factory(t) {
  return new (t || _SearchItemService)(\u0275\u0275inject(DetalisService));
};
_SearchItemService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SearchItemService, factory: _SearchItemService.\u0275fac, providedIn: "root" });
var SearchItemService = _SearchItemService;

// src/app/features/youtube/components/search-item/search-item.component.ts
var _c04 = ["*"];
var _c13 = (a0, a1) => ({ imageUrl: a0, headerText: a1 });
var _c23 = () => ({ raised: true });
function SearchItemComponent_ProjectionFallback_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-card", 1)(1, "app-custom-button", 2);
    \u0275\u0275listener("click", function SearchItemComponent_ProjectionFallback_1_Template_app_custom_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openDetalis());
    });
    \u0275\u0275text(2, "More");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "app-statistics", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("config", \u0275\u0275pureFunction2(3, _c13, ctx_r1.imgDefaultUrl, ctx_r1.title));
    \u0275\u0275advance();
    \u0275\u0275property("config", \u0275\u0275pureFunction0(6, _c23));
    \u0275\u0275advance(2);
    \u0275\u0275property("statistics", ctx_r1.itemData == null ? null : ctx_r1.itemData.statistics);
  }
}
var _SearchItemComponent = class _SearchItemComponent {
  constructor(searchItemService) {
    this.searchItemService = searchItemService;
    this.id = "";
    this.imgDefaultUrl = "";
    this.title = "";
    this.publishedAt = "";
  }
  ngOnInit() {
    this.setPublishedAt();
    this.setImgDefaultUrl();
    this.setTitle();
    this.setId();
  }
  setImgDefaultUrl() {
    this.imgDefaultUrl = this.itemData?.snippet?.thumbnails?.standard?.url ?? "";
  }
  setTitle() {
    this.title = this.itemData?.snippet?.title ?? this.itemData?.snippet?.localized?.title ?? "";
  }
  setId() {
    this.id = this.itemData?.id ?? "";
  }
  setPublishedAt() {
    this.publishedAt = this.itemData?.snippet?.publishedAt ?? "";
  }
  openDetalis() {
    this.searchItemService.openDetalis(this.id);
  }
};
_SearchItemComponent.\u0275fac = function SearchItemComponent_Factory(t) {
  return new (t || _SearchItemComponent)(\u0275\u0275directiveInject(SearchItemService));
};
_SearchItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchItemComponent, selectors: [["app-search-item"]], inputs: { itemData: "itemData" }, standalone: true, features: [\u0275\u0275StandaloneFeature], ngContentSelectors: _c04, decls: 3, vars: 1, consts: [[1, "hover:drop-shadow-2xl", "transition-all", 3, "appColoredBorder"], [3, "config"], [1, "m-auto", 3, "click", "config"], [3, "statistics"]], template: function SearchItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projectionDef();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1, 0, null, SearchItemComponent_ProjectionFallback_1_Template, 4, 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appColoredBorder", ctx.publishedAt);
  }
}, dependencies: [
  ColoredBorderDirective,
  ToolbarModule,
  CardComponent,
  CustomButtonComponent,
  CommonModule,
  StatisticsComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=search-item.component.css.map */"] });
var SearchItemComponent = _SearchItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchItemComponent, { className: "SearchItemComponent", filePath: "src\\app\\features\\youtube\\components\\search-item\\search-item.component.ts", lineNumber: 32 });
})();

// src/app/features/youtube/pipes/filterByViews.pipe.ts
var _FilterByViewsPipe = class _FilterByViewsPipe {
  transform(items, order) {
    return items?.sort((a, b) => {
      const viewCountA = +(a.statistics?.viewCount ?? 0);
      const viewCountB = +(b.statistics?.viewCount ?? 0);
      return order === "asc" ? viewCountA - viewCountB : viewCountB - viewCountA;
    }) || [];
  }
};
_FilterByViewsPipe.\u0275fac = function FilterByViewsPipe_Factory(t) {
  return new (t || _FilterByViewsPipe)();
};
_FilterByViewsPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterByViews", type: _FilterByViewsPipe, pure: true, standalone: true });
var FilterByViewsPipe = _FilterByViewsPipe;

// src/app/features/youtube/pipes/filterByDate.pipe.ts
var _FilterByDatePipe = class _FilterByDatePipe {
  transform(items, order) {
    return items?.sort((a, b) => {
      const dateA = new Date(a.snippet.publishedAt).getTime();
      const dateB = new Date(b.snippet.publishedAt).getTime();
      return order === "asc" ? dateA - dateB : dateB - dateA;
    }) || [];
  }
};
_FilterByDatePipe.\u0275fac = function FilterByDatePipe_Factory(t) {
  return new (t || _FilterByDatePipe)();
};
_FilterByDatePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterByDate", type: _FilterByDatePipe, pure: true, standalone: true });
var FilterByDatePipe = _FilterByDatePipe;

// src/app/features/youtube/pipes/filterByTitle.pipe.ts
var _FilterByTitlePipe = class _FilterByTitlePipe {
  transform(items, searchText) {
    if (!items || !searchText)
      return items;
    searchText = searchText.toLowerCase();
    return items.filter((item) => item.snippet.title.toLowerCase().includes(searchText));
  }
};
_FilterByTitlePipe.\u0275fac = function FilterByTitlePipe_Factory(t) {
  return new (t || _FilterByTitlePipe)();
};
_FilterByTitlePipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "filterByTitle", type: _FilterByTitlePipe, pure: true, standalone: true });
var FilterByTitlePipe = _FilterByTitlePipe;

// src/app/features/youtube/components/search-results/search-results.component.ts
function SearchResultsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "app-search-item", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("itemData", item_r1);
  }
}
var _SearchResultsComponent = class _SearchResultsComponent {
  constructor(searchResultsService) {
    this.searchResultsService = searchResultsService;
    this.title = "Search Results";
  }
  ngOnDestroy() {
    this.searchResultsService.destroyListeners();
  }
};
_SearchResultsComponent.\u0275fac = function SearchResultsComponent_Factory(t) {
  return new (t || _SearchResultsComponent)(\u0275\u0275directiveInject(SearchResultsService));
};
_SearchResultsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchResultsComponent, selectors: [["app-search-results"]], decls: 6, vars: 11, consts: [[1, "card", "text-right", 3, "header"], [1, "card", "flex-wrap", "flex", "flex-row", "justify-center", "gap-5"], [4, "ngFor", "ngForOf"], [3, "itemData"]], template: function SearchResultsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-card", 0)(1, "div", 1);
    \u0275\u0275template(2, SearchResultsComponent_div_2_Template, 2, 1, "div", 2);
    \u0275\u0275pipe(3, "filterByTitle");
    \u0275\u0275pipe(4, "filterByDate");
    \u0275\u0275pipe(5, "filterByViews");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("header", ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind2(5, 8, \u0275\u0275pipeBind2(4, 5, \u0275\u0275pipeBind2(3, 2, ctx.searchResultsService.SearchResultsData.searchedItems, ctx.searchResultsService.SearchResultsData.filterTitle), ctx.searchResultsService.SearchResultsData.filterDate), ctx.searchResultsService.SearchResultsData.filterViews));
  }
}, dependencies: [SearchItemComponent, NgForOf, Card, FilterByViewsPipe, FilterByDatePipe, FilterByTitlePipe] });
var SearchResultsComponent = _SearchResultsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchResultsComponent, { className: "SearchResultsComponent", filePath: "src\\app\\features\\youtube\\components\\search-results\\search-results.component.ts", lineNumber: 9 });
})();

// src/app/features/youtube/pages/main/main.component.ts
var _MainComponent = class _MainComponent {
};
_MainComponent.\u0275fac = function MainComponent_Factory(t) {
  return new (t || _MainComponent)();
};
_MainComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MainComponent, selectors: [["app-main-page"]], decls: 1, vars: 0, template: function MainComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-search-results");
  }
}, dependencies: [SearchResultsComponent] });
var MainComponent = _MainComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MainComponent, { className: "MainComponent", filePath: "src\\app\\features\\youtube\\pages\\main\\main.component.ts", lineNumber: 8 });
})();

// src/app/features/youtube/components/detalis/detalis.component.ts
var _c05 = () => ({ raised: true, icon: "pi pi-angle-double-left" });
var _c14 = () => ({ width: "100%" });
var _DetalisComponent = class _DetalisComponent {
  constructor(detalisService, activatedRoute) {
    this.detalisService = detalisService;
    this.activatedRoute = activatedRoute;
    this.id = "";
  }
  ngOnInit() {
    this.turnOnSubscribes();
  }
  turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params["id"];
      this.id = id;
    });
    this.detalisService.loadDetalisById(this.id);
  }
  ngOnDestroy() {
    this.detalisService.turnOffSubscribes();
  }
  handleButtonBack() {
    this.detalisService.handleButtonBack();
  }
};
_DetalisComponent.\u0275fac = function DetalisComponent_Factory(t) {
  return new (t || _DetalisComponent)(\u0275\u0275directiveInject(DetalisService), \u0275\u0275directiveInject(ActivatedRoute));
};
_DetalisComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DetalisComponent, selectors: [["app-detalis"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 17, consts: [["styleClass", "w-5/6 mx-auto my-8", 3, "legend"], [1, "flex", "row", "justify-between"], [3, "click", "config"], [1, "flex", "gap-2", "flex-col", "justify-start", "align-items-center"], [1, "m-1"], ["alt", "Video Preview", 1, "block", "max-w-none", "overflow-hidden", 3, "src"], [3, "appColoredBorder", "statistics"], [1, "text-center", "font-medium", "p-2", "border-r-2", "shadow-md", 3, "appColoredBorder"], [1, "font-medium", "text-center", "p-2", "border-r-2", "shadow-md", 3, "appColoredBorder"], ["layout", "vertical"], [1, "flex", "flex-col", "gap-2", "align-items-center", "justifyt-center"], [1, "p-2", "border-r-2", "shadow-md", "max-h-full", 3, "appColoredBorder"]], template: function DetalisComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p-fieldset", 0)(1, "div", 1)(2, "app-custom-button", 2);
    \u0275\u0275listener("click", function DetalisComponent_Template_app_custom_button_click_2_listener() {
      return ctx.handleButtonBack();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275element(5, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "app-statistics", 6);
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 8);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "p-divider", 9);
    \u0275\u0275elementStart(13, "div", 10)(14, "p-scrollPanel", 11)(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275property("legend", ctx.detalisService.datalisData.channelTitle);
    \u0275\u0275advance(2);
    \u0275\u0275property("config", \u0275\u0275pureFunction0(15, _c05));
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx.detalisService.datalisData.img.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("appColoredBorder", ctx.detalisService.datalisData.publishedAt)("statistics", ctx.detalisService.datalisData.statistics);
    \u0275\u0275advance();
    \u0275\u0275property("appColoredBorder", ctx.detalisService.datalisData.publishedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.detalisService.datalisData.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("appColoredBorder", ctx.detalisService.datalisData.publishedAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 13, ctx.detalisService.datalisData.publishedAt), " ");
    \u0275\u0275advance(4);
    \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c14));
    \u0275\u0275property("appColoredBorder", ctx.detalisService.datalisData.publishedAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.detalisService.datalisData.description);
  }
}, dependencies: [
  ToolbarModule,
  FieldsetModule,
  Fieldset,
  CustomButtonComponent,
  ColoredBorderDirective,
  StatisticsComponent,
  DividerModule,
  Divider,
  CommonModule,
  DatePipe,
  ScrollPanelModule,
  ScrollPanel
] });
var DetalisComponent = _DetalisComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DetalisComponent, { className: "DetalisComponent", filePath: "src\\app\\features\\youtube\\components\\detalis\\detalis.component.ts", lineNumber: 29 });
})();

// src/app/features/youtube/modules/youtube-routing.module.ts
var routes = [
  { path: "", pathMatch: "full", component: MainComponent },
  { path: "detalis/:id", component: DetalisComponent }
];
var _YoutubeRoutingModule = class _YoutubeRoutingModule {
};
_YoutubeRoutingModule.\u0275fac = function YoutubeRoutingModule_Factory(t) {
  return new (t || _YoutubeRoutingModule)();
};
_YoutubeRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _YoutubeRoutingModule });
_YoutubeRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
var YoutubeRoutingModule = _YoutubeRoutingModule;

// src/app/features/youtube/modules/youtube.module.ts
var _YoutubeModule = class _YoutubeModule {
};
_YoutubeModule.\u0275fac = function YoutubeModule_Factory(t) {
  return new (t || _YoutubeModule)();
};
_YoutubeModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _YoutubeModule });
_YoutubeModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [DetalisService], imports: [
  SearchItemComponent,
  CommonModule,
  ScrollPanelModule,
  CardModule,
  ToolbarModule,
  CustomButtonComponent,
  CardComponent,
  YoutubeRoutingModule,
  StatisticsComponent,
  DetalisComponent
] });
var YoutubeModule = _YoutubeModule;
export {
  YoutubeModule
};
//# sourceMappingURL=chunk-TG6HOTJL.js.map
