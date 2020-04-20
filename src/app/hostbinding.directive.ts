import { Directive, HostBinding, Input, OnInit, Self } from '@angular/core';

@Directive({
    selector: 'input',
})
export class HostBindingDirective {
    // TODO comment the input binding and the spec succeeds
    @Input()
    @HostBinding()
    public recommended: boolean;

    public ngOnInit() {
        this.recommended = true;
    }
}