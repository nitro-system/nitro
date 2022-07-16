import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

export default {
  title: 'HomeComponent',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [apiUrlInterceptorProvider(), HomeService],
    }),
  ],
} as Meta<HomeComponent>;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  project: 'admin-app',
};
