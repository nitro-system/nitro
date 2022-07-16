import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './services.component';
import { ServicesService } from './services.service';

export default {
  title: 'ServicesComponent',
  component: ServicesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [ServicesService, apiUrlInterceptorProvider()],
    }),
  ],
} as Meta<ServicesComponent>;

const Template: Story<ServicesComponent> = (args: ServicesComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
