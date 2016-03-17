import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
  selector: '[myHighLight]',
  inputs: ['highLightColor:myHighLight'],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighLightDirective{
  private _defaultColor = 'green'
  highLightColor:string

  constructor(private _elRef: ElementRef, private _renderer: Renderer){}

  // ngOnInit(){
  //   this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this.highLightColor||this._defaultColor)
  // }

  onMouseEnter(){
    this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this.highLightColor||this._defaultColor)
  }

  onMouseLeave(){
    this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',null)
  }

}