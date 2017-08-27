
## FAB & AdMob Pro do not coexist properly

*Ejemplo con el que se reproduce la situación descrita en el 'current behavoir'.

Example with which reproduces the situation described in the 'current behavoir'

It is based on a sideMenu type app, which has been added banner and interstitial display in the home.html and list.html pages. There is also code in their respective files home.ts and list.ts, in the ngOnInit method, where a service called advertising is used, which is in the file 
FAB-Test-Issue\src\clases\services\publicidad-service.ts.

### Current behavoir:

[Ionic issue](https://github.com/ionic-team/ionic/issues/12746).

When using an FAB in the bottom, in a page where we have enabled in the foot an AdMob Pro banner and in that same page, when we enter it (in event ngOnInit) we load an interstitial of AdMob Pro, when closing the interstitial, the FAB is hidden under the banner.

This only happens in IOS. Android works properly and the FAB is above the banner.

In IOS, in addition to hiding the FAB, the bottom of the page is also covered by the banner. It is as if after showing the interstitial, the size of the page happens to occupy the entire screen space of the mobile, without realizing that at the bottom of it has been loaded a banner.

### Expected behavior:
The FAB should be above the banner, as in the first image.
