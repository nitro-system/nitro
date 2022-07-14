import { HttpClientModule } from '@angular/common/http';
import { apiUrlInterceptorProvider } from '@nitro/shared/interceptors';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

export default {
  title: 'HomeComponent',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      imports: [HttpClientModule],
      providers: [apiUrlInterceptorProvider(), HomeService],
    }),
  ],
} as Meta<HomeComponent>;

const Template: Story<HomeComponent> = (args: HomeComponent) => ({
  props: args,
});

export const Admin = Template.bind({});
Admin.args = {
  project: 'admin-App',
};

export const Org = Template.bind({});
Org.args = {
  project: 'org-app',
};

export const Client = Template.bind({});
Client.args = {
  project: 'client-app',
};
