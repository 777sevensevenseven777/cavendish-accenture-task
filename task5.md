05:  
A typo in state setter - `setFeul`

06:  
Please consider using consistent naming in state getter and setter - either `...Text` or `...Txt`

08-15:  
This code is causing an infinite loop and submits the request on every component rerender. Consider adding empty dependency array and running request as an IIFE or using some helper function

09:  
Consider getting requested fleet number from component props instead of hardcoding the value, as it might need to be configurable some time later in the future

18-19:  
Please double check if fleet's fuel amount is available under `fuel` variable or it's property `fuel.litres`? Also, are we using proper logic here? Should we buy more fuel everytime the fleet has more fuel than 0?

25:  
Please consider using strict equality checks and consistent quotes usage