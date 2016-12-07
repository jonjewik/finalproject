import React from 'react';
import _ from 'lodash';
import { Carousel, Button } from 'react-bootstrap';

class Resources extends React.Component {
  render() {
    return (
      <div>
      <h3> Resources </h3>
      <h4> LGBTQ </h4>
      <p>
        <ul>
          <li><a href="http://www.hrusa.org/default.shtm">Human Rights Resource Center</a></li>
          <li><a href="http://www.equalityfederation.org/">Equality Federation</a></li>
          <li><a href="http://hrc.org/">Human Rights Campaign (HRC)</a></li>
          <li><a href="http://www.biresource.net/">Bisexual Resource Center</a></li>
          <li><a href="http://www.aclu.org/lgbt-rights">American Civil Liberties Union (ACLU)</a></li>
        </ul>
      </p>

      <h4> Equality </h4>
      <p>
        <ul>
          <li><a href="http://www.glbthotline.org/hotline.html">GLBT Hotline: 1-888-843-4564</a></li>
          <li><a href="http://www.aclu.org">American Civil Liberties Union (ACLU)</a></li>
          <li><a href="http://www.racialequityresourceguide.org">Racial Equity Resource Guide</a></li>
          <li><a href="https://www.racialequitytools.org/home">Racial Equity Tools</a></li>
          <li><a href="https://www2.ed.gov/policy/rights/guid/ocr/sex.html">Sex Discrimination Resources</a></li>
        </ul>
      </p>
      <h4> Youth </h4>
      <p>
        <ul>
          <li><a href="http://www.pbs.org/wnet/cryforhelp/episodes/resources/hotlines-and-web-sites-for-teens/?p=11">National Suicide Hotline: <a href="tel:+18007842433">1-800-SUICIDE (784-2433)</a></a></li>
          <li><a href="http://nationalsafeplace.org">Safe Place</a></li>
          <li><a href="http://www.pbs.org/wnet/cryforhelp/episodes/resources/hotlines-and-web-sites-for-teens/?p=11">PBS Teenage Mental Illness and Suicide Help</a></li>
          <li><a href="https://www.jedfoundation.org">The Jed Foundation</a></li>
        </ul>
      </p>
      <h4> Abuse Victims </h4>
      <p>
        <ul>
          <li><a href="http://www.thehotline.org/resources/">National Domestic Violence Hotline: <a href="tel:+18007997233">1-800-799-7233</a></a></li>
          <li><a href="http://www.stopstreetharassment.org/our-work/nationalshhotline/">National Street Harassment Hotline: <a href="tel:+8558975910">855-897-5910</a></a></li>
          <li><a href="http://www.childhelp.org/">National Child Abuse Hotline: <a href="tel:8004222253">800-422-2253</a></a></li>
          <li><a href="http://www.ncadv.org/">National Coalition against Domestic Violence</a></li>
          <li><a href="http://www.notalone.gov/">NotAlone.gov</a></li>
        </ul>
      </p>

      <h4> Rape and Sexual Assault </h4>
      <p>
        <ul>
          <li><a href="http://www.rainn.org/get-help/national-sexual-assault-hotline">National Sexual Assault Hotline: <a href="tel:+18006564673">1-800-656-HOPE</a></a></li>
          <li><a href="http://www.nsvrc.org/">National Sexual Violence Resource Center</a></li>
          <li><a href="http://nsopw.gov/Core/Conditions.aspx">National Sex Offender Registry</a></li>
        </ul>
      </p>

      <h4> Muslims </h4>
      <p>
        <ul>
          <li><a href="http://www.mrcssi.com">Muslim Resource Center</a></li>
          <li><a href="http://www.api-gbv.org/organizing/manadv.php">Muslim Advocacy Network</a></li>
          <li><a href="http://www.mwrcnfp.org">Muslim Women Resource Center</a></li>
        </ul>
      </p>

      <h4> Women </h4>
      <p>
        <ul>
          <li><a href="http://www.aclu.org">American Civil Liberties Union (ACLU)</a></li>
          <li><a href="http://www.learningpartnership.org/womens-human-rights-resources">Women's Learning Partnership</a></li>
          <li><a href="https://www.awid.org/priority-areas/resourcing-womens-rights">Resourcing Womens Rights</a></li>
        </ul>
      </p>
      </div>

    );
  }
}