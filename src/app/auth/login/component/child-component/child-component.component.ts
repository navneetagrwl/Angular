import { Input, ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation,
  OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ChildComponentComponent {
  @Input() someArray: number[] = [];

  @Input() set name(val: string) {
    if (val) {
      this.userName = val;
    }
  }

  get name() { return this.userName; }

  userName: string;
  constructor() { }

  ngOnInit() {
    //this.userName = this.name;
    alert('ChildchangesOn');
  }

  ngOnChanges() {
    //this.userName = this.name;
    alert('Childchanges' + this.someArray);
  }

  // ngDoCheck() {
  //   alert('ChildchangesngDoCheck');
  // }

  // ngAfterContentInit() {
  //   alert('ChildchangesngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   alert('ChildchangesngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   alert('ChildchangesngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   alert('ChildchangesngAfterViewChecked');
  // }

  // ngOnDestroy () {
  //   alert('ChildchangesngOnDestroy');
  // }

}
