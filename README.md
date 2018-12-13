# E2E Environment Template Repository 


## GuideLines

You can follow the guidelines for e2e configuration from below attached document link.
http://www.syncfusion.com/downloads/support/directtrac/general/ze/docs-1539876051.zip

## Testing Angular Application 

Before testing angular application please add the below line in top of the spec file

```
browser.waitForAngularEnabled = true;
```
## Build Application 

Run the below command in command prompt.

```
npm start
```

## Running Application 

Run the below command in command prompt.

```
gulp e2e-ci-test
```
