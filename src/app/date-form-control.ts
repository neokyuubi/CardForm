import { FormControl } from '@angular/forms'

export class DateFormControl extends FormControl{

    override setValue(value:string | null, options:any)
    {
        console.log("value", value);
        console.log("this.value", this.value);
        if(value == null)
        {
            value = '';
        }
        if(value.match(/[^0-9|\/]/gi))
        {
            super.setValue(this.value,  {...options, emitModelToViewChange:true });
            return;
        }
        if(value.length > 5)
        {
            super.setValue(this.value,  {...options, emitModelToViewChange:true });
            return;
        }
        if(value.length == 2 && this.value.length == 3)
        {
            super.setValue(value,  {...options, emitModelToViewChange:true });
            return;
        }
        if(value.length === 2)
        {
            super.setValue(value + '/', {...options, emitModelToViewChange:true });
            return;
        }
        super.setValue(value, {...options, emitModelToViewChange:true });
    }

}
