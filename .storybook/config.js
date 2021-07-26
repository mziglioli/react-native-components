import { configure, addDecorator } from "@storybook/react";

import { withKnobs } from '@storybook/addon-knobs';

import '@storybook/addon-ondevice-actions/register';
import '@storybook/addon-ondevice-knobs/register';

// enables knobs for all stories
addDecorator(withKnobs);

// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.tsx$/), module);
