# Tailwind CSS Custom Color Not Applied

This repository demonstrates a bug where a custom color defined in a Tailwind CSS configuration file is not applied to elements in a project. The issue is caused by an incorrect content path in the Tailwind configuration.

## Bug Description

The `custom-blue` color class is defined in the `tailwind.config.js` file but is not applied to the elements in the component files. This is because the `content` array in the `tailwind.config.js` file does not include all the necessary paths to the files using the color class. 

## Solution

The solution is to ensure that the `content` array in the `tailwind.config.js` file includes all the relevant file paths where the custom color classes are used.  In this case, we add `'./src/**/*.{html,js,ts,jsx,tsx}'` to include all files within the `src` directory that uses `.html`, `.js`, `.ts`, `.jsx`, or `.tsx` file extensions.