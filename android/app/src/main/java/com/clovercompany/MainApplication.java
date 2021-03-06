package com.clovercompany;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.appsee.reactnative.AppseeReactPackage;
import com.cmcewen.blurview.BlurViewPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import org.reactnative.camera.RNCameraPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import it.innove.BleManagerPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.entria.views.RNViewOverflowPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new AppseeReactPackage(),
            new BlurViewPackage(),
            new SplashScreenReactPackage(),
            new RNCameraPackage(),
            new VectorIconsPackage(),
            new BleManagerPackage(),
            new LottiePackage(),
            new RNViewOverflowPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
