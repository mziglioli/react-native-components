import React from 'react';
import { AvatarBox } from './AvatarBox';

export default {
  title: 'Components/AvatarBox',
  component: AvatarBox,
};

const defaultValues = {
  image: undefined,
};

export const BasicUsage = (args: any) => <AvatarBox {...args} />;
BasicUsage.args = {
  ...defaultValues,
};
export const WithImage = (args: any) => <AvatarBox {...args} />;
WithImage.args = {
  ...defaultValues,
  image:
    'https://cdn2.rcstatic.com/com.rentalcars.185492029745.eu-west-1.web.prod.static-live/images/landing-pages/usps/mobile/usp_magnifier@1x.png',
};
