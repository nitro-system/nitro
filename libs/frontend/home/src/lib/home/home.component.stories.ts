import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

export default {
  title: 'HomeComponent',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [BrowserAnimationsModule, CommonModule, HttpClientModule],
      providers: [apiUrlInterceptorProvider(), HomeService],
    }),
  ],
} as Meta<HomeComponent>;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const Admin = Template.bind({});
Admin.args = {
  project: 'admin-app',
};

export const Org = Template.bind({});
Org.args = {
  project: 'org-app',
};

export const Client = Template.bind({});
Client.args = {
  project: 'client-app',
};
