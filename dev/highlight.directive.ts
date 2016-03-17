import {Directive, ElementRef, Renderer,OnInit} from 'angular2/core'

@Directive({
  selector: '[myHighLight]'
})
export class HighLightDirective implements OnInit{
  private _defaultColor = 'green'
  constructor(private _elRef: ElementRef, private _renderer: Renderer){}

  ngOnInit(){
    this._renderer.setElementStyle(this._elRef.nativeElement,'background-color',this._defaultColor)
  }

}