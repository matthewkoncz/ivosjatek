// Import ReactJS module.
import React from 'react';

// Import Source component.
import SourceDetail from './SourceDetail';

// Import GitHub logo.
import githubImageResource from "./../../../../img/github_logo.png";


// Import React Helmet for handling <head> attributes dinamically.
import { Helmet } from "react-helmet";

/**
 * The page contains the list of used sources.
 * 
 * @param {Object} props.i18n Configured i18next object. It is used for the localization.
 */
const Sources = props => {
  return (
    <div className="page-frame">
      <Helmet>
        <title>{props.i18n.t("nav.sources")} | {props.i18n.t("nav.title")}</title>
        <meta name="description" content={this.props.i18n.t("desc.sources")} />
      </Helmet>
      <h4>{props.i18n.t("source.sources_title")}:</h4>
      <ul>
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_cocktail")}
          sourceURL="https://www.onlinewebfonts.com/icon/480147"
          sourceName="Icon Fonts"
          licenceURL="https://creativecommons.org/licenses/by/3.0/"
          licenceType="CC BY 3.0"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_hu_flag")}
          sourceURL="https://www.flickr.com/photos/80497449@N04/7378164364"
          sourceName="Nicolas Raymond"
          licenceURL="https://creativecommons.org/licenses/by/2.0/"
          licenceType="CC BY 2.0"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_en_flag")}
          sourceURL="https://www.publicdomainpictures.net/hu/view-image.php?image=136202"
          sourceName="Dawn Hudson"
          licenceURL="https://creativecommons.org/publicdomain/zero/1.0/"
          licenceType="CC BY 1.0"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_18")}
          sourceURL="https://www.shareicon.net/cinema-adult-number-age-movies-shapes-711363"
          sourceName="SHAREICON.NET"
          licenceURL="https://www.shareicon.net/about"
          licenceType="Flaticon Basic Licence"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={"Animate.css " + props.i18n.t("source.library")}
          sourceURL="https://daneden.github.io/animate.css/"
          sourceName="Daniel Eden"
          licenceURL="https://github.com/daneden/animate.css/blob/master/LICENSE"
          licenceType="MIT Licence"
        />

        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_king")}
          sourceURL="https://www.peakpx.com/478241/king-on-robe-statue"
          sourceName="PEAKPX"
          licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
          licenceType="CC0 1.0 Universal"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_bottles")}
          sourceURL="https://www.peakpx.com/581703/2-brown-label-bottles"
          sourceName="PEAKPX"
          licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
          licenceType="CC0 1.0 Universal"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_bar_v1")}
          sourceURL="https://www.peakpx.com/478886/bar-desk"
          sourceName="PEAKPX"
          licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
          licenceType="CC0 1.0 Universal"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_bar_v2")}
          sourceURL="https://www.peakpx.com/562004/bar-store-set"
          sourceName="PEAKPX"
          licenceURL="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
          licenceType="CC0 1.0 Universal"
        />
        <SourceDetail
          i18n={props.i18n}
          localizedName={props.i18n.t("source.source_whiskey")}
          sourceURL="https://pixabay.com/photos/alcohol-party-style-drink-1961542/"
          sourceName="PIXABAY"
          licenceURL="https://pixabay.com/service/license/"
          licenceType="Pixabay Licence"
        />
      </ul>
      <div>
        <h4>GitHub:</h4>
        <a href="https://github.com/matthewkoncz/ivosjatek" className="github-ref" target="_blank">
          <img src={githubImageResource} className="github-icon" alt="insta-icon" />
          <div className="github-label" >IVOSJATEK</div>
        </a>
      </div>
    </div>
  );
}

// Export component.
export default Sources;