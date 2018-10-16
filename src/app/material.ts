import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatIconModule} from '@angular/material/icon';
import{MatMenuModule} from '@angular/material/menu';
import{NgModule} from '@angular/core';
import{MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatSlideToggleModule, MatButtonToggleModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatProgressBarModule, MatSlideToggleModule, MatButtonToggleModule],
})
export class MaterialModule{}