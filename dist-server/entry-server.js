var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import React3, { Component, useEffect, useState, createContext, useContext, useRef } from "react";
import fastCompare from "react-fast-compare";
import invariant from "invariant";
import shallowEqual from "shallowequal";
import { Link, useLocation, useNavigate, Navigate, Routes, Route as Route$1 } from "react-router-dom";
import { CircleCheck, ArrowRight, Play, ChevronDown, Mail, MapPin, Calendar, TrendingUp, MessageSquare, FileText, Zap, ChartBar, Layers, Activity, Users, Check, X, Shield, CircleCheck as CheckCircle, CircleAlert as AlertCircle, Bot, Cookie, Settings as Settings$1, LogIn, TriangleAlert as AlertTriangle, DollarSign, Send, User, SquareCheck as CheckSquare, Hop as Home, Route, FileImage, ChartBar as BarChart3, Bell, MousePointer, Plus, ListFilter as Filter, Search, ArrowLeft, Eye, Target, Clock, CreditCard, Palette, Book, Video, MessageCircle, Sparkles, Volume2, VolumeX, Minimize2, Square, MicOff, Mic, VideoOff, Phone, TriangleAlert, TrendingDown, ChevronLeft, Briefcase, Crown, Download } from "lucide-react";
import { createClient } from "@supabase/supabase-js";
var TAG_NAMES = /* @__PURE__ */ ((TAG_NAMES2) => {
  TAG_NAMES2["BASE"] = "base";
  TAG_NAMES2["BODY"] = "body";
  TAG_NAMES2["HEAD"] = "head";
  TAG_NAMES2["HTML"] = "html";
  TAG_NAMES2["LINK"] = "link";
  TAG_NAMES2["META"] = "meta";
  TAG_NAMES2["NOSCRIPT"] = "noscript";
  TAG_NAMES2["SCRIPT"] = "script";
  TAG_NAMES2["STYLE"] = "style";
  TAG_NAMES2["TITLE"] = "title";
  TAG_NAMES2["FRAGMENT"] = "Symbol(react.fragment)";
  return TAG_NAMES2;
})(TAG_NAMES || {});
var SEO_PRIORITY_TAGS = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
};
var VALID_TAG_NAMES = Object.values(TAG_NAMES);
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HTML_TAG_MAP = Object.entries(REACT_TAG_MAP).reduce(
  (carry, [key, value]) => {
    carry[value] = key;
    return carry;
  },
  {}
);
var HELMET_ATTRIBUTE = "data-rh";
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
};
var getInnermostProperty = (propsList, property) => {
  for (let i = propsList.length - 1; i >= 0; i -= 1) {
    const props = propsList[i];
    if (Object.prototype.hasOwnProperty.call(props, property)) {
      return props[property];
    }
  }
  return null;
};
var getTitleFromPropsList = (propsList) => {
  let innermostTitle = getInnermostProperty(
    propsList,
    "title"
    /* TITLE */
  );
  const innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);
  if (Array.isArray(innermostTitle)) {
    innermostTitle = innermostTitle.join("");
  }
  if (innermostTemplate && innermostTitle) {
    return innermostTemplate.replace(/%s/g, () => innermostTitle);
  }
  const innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || void 0;
};
var getOnChangeClientState = (propsList) => getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || (() => {
});
var getAttributesFromPropsList = (tagType, propsList) => propsList.filter((props) => typeof props[tagType] !== "undefined").map((props) => props[tagType]).reduce((tagAttrs, current) => ({ ...tagAttrs, ...current }), {});
var getBaseTagFromPropsList = (primaryAttributes, propsList) => propsList.filter((props) => typeof props[
  "base"
  /* BASE */
] !== "undefined").map((props) => props[
  "base"
  /* BASE */
]).reverse().reduce((innermostBaseTag, tag) => {
  if (!innermostBaseTag.length) {
    const keys = Object.keys(tag);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const lowerCaseAttributeKey = attributeKey.toLowerCase();
      if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
        return innermostBaseTag.concat(tag);
      }
    }
  }
  return innermostBaseTag;
}, []);
var warn = (msg) => console && typeof console.warn === "function" && console.warn(msg);
var getTagsFromPropsList = (tagName, primaryAttributes, propsList) => {
  const approvedSeenTags = {};
  return propsList.filter((props) => {
    if (Array.isArray(props[tagName])) {
      return true;
    }
    if (typeof props[tagName] !== "undefined") {
      warn(
        `Helmet: ${tagName} should be of type "Array". Instead found type "${typeof props[tagName]}"`
      );
    }
    return false;
  }).map((props) => props[tagName]).reverse().reduce((approvedTags, instanceTags) => {
    const instanceSeenTags = {};
    instanceTags.filter((tag) => {
      let primaryAttributeKey;
      const keys2 = Object.keys(tag);
      for (let i = 0; i < keys2.length; i += 1) {
        const attributeKey = keys2[i];
        const lowerCaseAttributeKey = attributeKey.toLowerCase();
        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === "rel" && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === "rel" && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        }
        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === "innerHTML" || attributeKey === "cssText" || attributeKey === "itemprop")) {
          primaryAttributeKey = attributeKey;
        }
      }
      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }
      const value = tag[primaryAttributeKey].toLowerCase();
      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }
      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }
      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }
      return false;
    }).reverse().forEach((tag) => approvedTags.push(tag));
    const keys = Object.keys(instanceSeenTags);
    for (let i = 0; i < keys.length; i += 1) {
      const attributeKey = keys[i];
      const tagUnion = {
        ...approvedSeenTags[attributeKey],
        ...instanceSeenTags[attributeKey]
      };
      approvedSeenTags[attributeKey] = tagUnion;
    }
    return approvedTags;
  }, []).reverse();
};
var getAnyTrueFromPropsList = (propsList, checkedTag) => {
  if (Array.isArray(propsList) && propsList.length) {
    for (let index = 0; index < propsList.length; index += 1) {
      const prop = propsList[index];
      if (prop[checkedTag]) {
        return true;
      }
    }
  }
  return false;
};
var reducePropsToState = (propsList) => ({
  baseTag: getBaseTagFromPropsList([
    "href"
    /* HREF */
  ], propsList),
  bodyAttributes: getAttributesFromPropsList("bodyAttributes", propsList),
  defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
  encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: getAttributesFromPropsList("htmlAttributes", propsList),
  linkTags: getTagsFromPropsList(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    propsList
  ),
  metaTags: getTagsFromPropsList(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    propsList
  ),
  noscriptTags: getTagsFromPropsList("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], propsList),
  onChangeClientState: getOnChangeClientState(propsList),
  scriptTags: getTagsFromPropsList(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    propsList
  ),
  styleTags: getTagsFromPropsList("style", [
    "cssText"
    /* CSS_TEXT */
  ], propsList),
  title: getTitleFromPropsList(propsList),
  titleAttributes: getAttributesFromPropsList("titleAttributes", propsList),
  prioritizeSeoTags: getAnyTrueFromPropsList(propsList, HELMET_PROPS.PRIORITIZE_SEO_TAGS)
});
var flattenArray = (possibleArray) => Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
var checkIfPropsMatch = (props, toMatch) => {
  const keys = Object.keys(props);
  for (let i = 0; i < keys.length; i += 1) {
    if (toMatch[keys[i]] && toMatch[keys[i]].includes(props[keys[i]])) {
      return true;
    }
  }
  return false;
};
var prioritizer = (elementsList, propsToMatch) => {
  if (Array.isArray(elementsList)) {
    return elementsList.reduce(
      (acc, elementAttrs) => {
        if (checkIfPropsMatch(elementAttrs, propsToMatch)) {
          acc.priority.push(elementAttrs);
        } else {
          acc.default.push(elementAttrs);
        }
        return acc;
      },
      { priority: [], default: [] }
    );
  }
  return { default: elementsList, priority: [] };
};
var without = (obj, key) => {
  return {
    ...obj,
    [key]: void 0
  };
};
var SELF_CLOSING_TAGS = [
  "noscript",
  "script",
  "style"
  /* STYLE */
];
var encodeSpecialCharacters = (str, encode = true) => {
  if (encode === false) {
    return String(str);
  }
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};
var generateElementAttributesAsString = (attributes) => Object.keys(attributes).reduce((str, key) => {
  const attr = typeof attributes[key] !== "undefined" ? `${key}="${attributes[key]}"` : `${key}`;
  return str ? `${str} ${attr}` : attr;
}, "");
var generateTitleAsString = (type, title, attributes, encode) => {
  const attributeString = generateElementAttributesAsString(attributes);
  const flattenedTitle = flattenArray(title);
  return attributeString ? `<${type} ${HELMET_ATTRIBUTE}="true" ${attributeString}>${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>` : `<${type} ${HELMET_ATTRIBUTE}="true">${encodeSpecialCharacters(
    flattenedTitle,
    encode
  )}</${type}>`;
};
var generateTagsAsString = (type, tags, encode = true) => tags.reduce((str, t) => {
  const tag = t;
  const attributeHtml = Object.keys(tag).filter(
    (attribute) => !(attribute === "innerHTML" || attribute === "cssText")
  ).reduce((string, attribute) => {
    const attr = typeof tag[attribute] === "undefined" ? attribute : `${attribute}="${encodeSpecialCharacters(tag[attribute], encode)}"`;
    return string ? `${string} ${attr}` : attr;
  }, "");
  const tagContent = tag.innerHTML || tag.cssText || "";
  const isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
  return `${str}<${type} ${HELMET_ATTRIBUTE}="true" ${attributeHtml}${isSelfClosing ? `/>` : `>${tagContent}</${type}>`}`;
}, "");
var convertElementAttributesToReactProps = (attributes, initProps = {}) => Object.keys(attributes).reduce((obj, key) => {
  const mapped = REACT_TAG_MAP[key];
  obj[mapped || key] = attributes[key];
  return obj;
}, initProps);
var generateTitleAsReactComponent = (_type, title, attributes) => {
  const initProps = {
    key: title,
    [HELMET_ATTRIBUTE]: true
  };
  const props = convertElementAttributesToReactProps(attributes, initProps);
  return [React3.createElement("title", props, title)];
};
var generateTagsAsReactComponent = (type, tags) => tags.map((tag, i) => {
  const mappedTag = {
    key: i,
    [HELMET_ATTRIBUTE]: true
  };
  Object.keys(tag).forEach((attribute) => {
    const mapped = REACT_TAG_MAP[attribute];
    const mappedAttribute = mapped || attribute;
    if (mappedAttribute === "innerHTML" || mappedAttribute === "cssText") {
      const content = tag.innerHTML || tag.cssText;
      mappedTag.dangerouslySetInnerHTML = { __html: content };
    } else {
      mappedTag[mappedAttribute] = tag[attribute];
    }
  });
  return React3.createElement(type, mappedTag);
});
var getMethodsForTag = (type, tags, encode = true) => {
  switch (type) {
    case "title":
      return {
        toComponent: () => generateTitleAsReactComponent(type, tags.title, tags.titleAttributes),
        toString: () => generateTitleAsString(type, tags.title, tags.titleAttributes, encode)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => convertElementAttributesToReactProps(tags),
        toString: () => generateElementAttributesAsString(tags)
      };
    default:
      return {
        toComponent: () => generateTagsAsReactComponent(type, tags),
        toString: () => generateTagsAsString(type, tags, encode)
      };
  }
};
var getPriorityMethods = ({ metaTags, linkTags, scriptTags, encode }) => {
  const meta = prioritizer(metaTags, SEO_PRIORITY_TAGS.meta);
  const link = prioritizer(linkTags, SEO_PRIORITY_TAGS.link);
  const script = prioritizer(scriptTags, SEO_PRIORITY_TAGS.script);
  const priorityMethods = {
    toComponent: () => [
      ...generateTagsAsReactComponent("meta", meta.priority),
      ...generateTagsAsReactComponent("link", link.priority),
      ...generateTagsAsReactComponent("script", script.priority)
    ],
    toString: () => (
      // generate all the tags as strings and concatenate them
      `${getMethodsForTag("meta", meta.priority, encode)} ${getMethodsForTag(
        "link",
        link.priority,
        encode
      )} ${getMethodsForTag("script", script.priority, encode)}`
    )
  };
  return {
    priorityMethods,
    metaTags: meta.default,
    linkTags: link.default,
    scriptTags: script.default
  };
};
var mapStateOnServer = (props) => {
  const {
    baseTag,
    bodyAttributes,
    encode = true,
    htmlAttributes,
    noscriptTags,
    styleTags,
    title = "",
    titleAttributes,
    prioritizeSeoTags
  } = props;
  let { linkTags, metaTags, scriptTags } = props;
  let priorityMethods = {
    toComponent: () => {
    },
    toString: () => ""
  };
  if (prioritizeSeoTags) {
    ({ priorityMethods, linkTags, metaTags, scriptTags } = getPriorityMethods(props));
  }
  return {
    priority: priorityMethods,
    base: getMethodsForTag("base", baseTag, encode),
    bodyAttributes: getMethodsForTag("bodyAttributes", bodyAttributes, encode),
    htmlAttributes: getMethodsForTag("htmlAttributes", htmlAttributes, encode),
    link: getMethodsForTag("link", linkTags, encode),
    meta: getMethodsForTag("meta", metaTags, encode),
    noscript: getMethodsForTag("noscript", noscriptTags, encode),
    script: getMethodsForTag("script", scriptTags, encode),
    style: getMethodsForTag("style", styleTags, encode),
    title: getMethodsForTag("title", { title, titleAttributes }, encode)
  };
};
var server_default = mapStateOnServer;
var instances = [];
var isDocument = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var HelmetData = class {
  constructor(context, canUseDOM) {
    __publicField(this, "instances", []);
    __publicField(this, "canUseDOM", isDocument);
    __publicField(this, "context");
    __publicField(this, "value", {
      setHelmet: (serverState) => {
        this.context.helmet = serverState;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? instances : this.instances,
        add: (instance) => {
          (this.canUseDOM ? instances : this.instances).push(instance);
        },
        remove: (instance) => {
          const index = (this.canUseDOM ? instances : this.instances).indexOf(instance);
          (this.canUseDOM ? instances : this.instances).splice(index, 1);
        }
      }
    });
    this.context = context;
    this.canUseDOM = canUseDOM || false;
    if (!canUseDOM) {
      context.helmet = server_default({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }
  }
};
var defaultValue = {};
var Context = React3.createContext(defaultValue);
var HelmetProvider = (_a = class extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "helmetData");
    this.helmetData = new HelmetData(this.props.context || {}, _a.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ React3.createElement(Context.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, __publicField(_a, "canUseDOM", isDocument), _a);
var updateTags = (type, tags) => {
  const headElement = document.head || document.querySelector(
    "head"
    /* HEAD */
  );
  const tagNodes = headElement.querySelectorAll(`${type}[${HELMET_ATTRIBUTE}]`);
  const oldTags = [].slice.call(tagNodes);
  const newTags = [];
  let indexToDelete;
  if (tags && tags.length) {
    tags.forEach((tag) => {
      const newElement = document.createElement(type);
      for (const attribute in tag) {
        if (Object.prototype.hasOwnProperty.call(tag, attribute)) {
          if (attribute === "innerHTML") {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === "cssText") {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            const attr = attribute;
            const value = typeof tag[attr] === "undefined" ? "" : tag[attr];
            newElement.setAttribute(attribute, value);
          }
        }
      }
      newElement.setAttribute(HELMET_ATTRIBUTE, "true");
      if (oldTags.some((existingTag, index) => {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }
  oldTags.forEach((tag) => {
    var _a2;
    return (_a2 = tag.parentNode) == null ? void 0 : _a2.removeChild(tag);
  });
  newTags.forEach((tag) => headElement.appendChild(tag));
  return {
    oldTags,
    newTags
  };
};
var updateAttributes = (tagName, attributes) => {
  const elementTag = document.getElementsByTagName(tagName)[0];
  if (!elementTag) {
    return;
  }
  const helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  const helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  const attributesToRemove = [...helmetAttributes];
  const attributeKeys = Object.keys(attributes);
  for (const attribute of attributeKeys) {
    const value = attributes[attribute] || "";
    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }
    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }
    const indexToSave = attributesToRemove.indexOf(attribute);
    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }
  for (let i = attributesToRemove.length - 1; i >= 0; i -= 1) {
    elementTag.removeAttribute(attributesToRemove[i]);
  }
  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};
var updateTitle = (title, attributes) => {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }
  updateAttributes("title", attributes);
};
var commitTagChanges = (newState, cb) => {
  const {
    baseTag,
    bodyAttributes,
    htmlAttributes,
    linkTags,
    metaTags,
    noscriptTags,
    onChangeClientState,
    scriptTags,
    styleTags,
    title,
    titleAttributes
  } = newState;
  updateAttributes("body", bodyAttributes);
  updateAttributes("html", htmlAttributes);
  updateTitle(title, titleAttributes);
  const tagUpdates = {
    baseTag: updateTags("base", baseTag),
    linkTags: updateTags("link", linkTags),
    metaTags: updateTags("meta", metaTags),
    noscriptTags: updateTags("noscript", noscriptTags),
    scriptTags: updateTags("script", scriptTags),
    styleTags: updateTags("style", styleTags)
  };
  const addedTags = {};
  const removedTags = {};
  Object.keys(tagUpdates).forEach((tagType) => {
    const { newTags, oldTags } = tagUpdates[tagType];
    if (newTags.length) {
      addedTags[tagType] = newTags;
    }
    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  if (cb) {
    cb();
  }
  onChangeClientState(newState, addedTags, removedTags);
};
var _helmetCallback = null;
var handleStateChangeOnClient = (newState) => {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }
  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(() => {
      commitTagChanges(newState, () => {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};
var client_default = handleStateChangeOnClient;
var HelmetDispatcher = class extends Component {
  constructor() {
    super(...arguments);
    __publicField(this, "rendered", false);
  }
  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances } = this.props.context;
    helmetInstances.remove(this);
    this.emitChange();
  }
  emitChange() {
    const { helmetInstances, setHelmet } = this.props.context;
    let serverState = null;
    const state = reducePropsToState(
      helmetInstances.get().map((instance) => {
        const props = { ...instance.props };
        delete props.context;
        return props;
      })
    );
    if (HelmetProvider.canUseDOM) {
      client_default(state);
    } else if (server_default) {
      serverState = server_default(state);
    }
    setHelmet(serverState);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered) {
      return;
    }
    this.rendered = true;
    const { helmetInstances } = this.props.context;
    helmetInstances.add(this);
    this.emitChange();
  }
  render() {
    this.init();
    return null;
  }
};
var Helmet = (_b = class extends Component {
  shouldComponentUpdate(nextProps) {
    return !fastCompare(without(this.props, "helmetData"), without(nextProps, "helmetData"));
  }
  mapNestedChildrenToProps(child, nestedChildren) {
    if (!nestedChildren) {
      return null;
    }
    switch (child.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: nestedChildren
        };
      case "style":
        return {
          cssText: nestedChildren
        };
      default:
        throw new Error(
          `<${child.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(child, arrayTypeChildren, newChildProps, nestedChildren) {
    return {
      ...arrayTypeChildren,
      [child.type]: [
        ...arrayTypeChildren[child.type] || [],
        {
          ...newChildProps,
          ...this.mapNestedChildrenToProps(child, nestedChildren)
        }
      ]
    };
  }
  mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren) {
    switch (child.type) {
      case "title":
        return {
          ...newProps,
          [child.type]: nestedChildren,
          titleAttributes: { ...newChildProps }
        };
      case "body":
        return {
          ...newProps,
          bodyAttributes: { ...newChildProps }
        };
      case "html":
        return {
          ...newProps,
          htmlAttributes: { ...newChildProps }
        };
      default:
        return {
          ...newProps,
          [child.type]: { ...newChildProps }
        };
    }
  }
  mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
    let newFlattenedProps = { ...newProps };
    Object.keys(arrayTypeChildren).forEach((arrayChildName) => {
      newFlattenedProps = {
        ...newFlattenedProps,
        [arrayChildName]: arrayTypeChildren[arrayChildName]
      };
    });
    return newFlattenedProps;
  }
  warnOnInvalidChildren(child, nestedChildren) {
    invariant(
      VALID_TAG_NAMES.some((name) => child.type === name),
      typeof child.type === "function" ? `You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.` : `Only elements types ${VALID_TAG_NAMES.join(
        ", "
      )} are allowed. Helmet does not support rendering <${child.type}> elements. Refer to our API for more information.`
    );
    invariant(
      !nestedChildren || typeof nestedChildren === "string" || Array.isArray(nestedChildren) && !nestedChildren.some((nestedChild) => typeof nestedChild !== "string"),
      `Helmet expects a string as a child of <${child.type}>. Did you forget to wrap your children in braces? ( <${child.type}>{\`\`}</${child.type}> ) Refer to our API for more information.`
    );
    return true;
  }
  mapChildrenToProps(children, newProps) {
    let arrayTypeChildren = {};
    React3.Children.forEach(children, (child) => {
      if (!child || !child.props) {
        return;
      }
      const { children: nestedChildren, ...childProps } = child.props;
      const newChildProps = Object.keys(childProps).reduce((obj, key) => {
        obj[HTML_TAG_MAP[key] || key] = childProps[key];
        return obj;
      }, {});
      let { type } = child;
      if (typeof type === "symbol") {
        type = type.toString();
      } else {
        this.warnOnInvalidChildren(child, nestedChildren);
      }
      switch (type) {
        case "Symbol(react.fragment)":
          newProps = this.mapChildrenToProps(nestedChildren, newProps);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          arrayTypeChildren = this.flattenArrayTypeChildren(
            child,
            arrayTypeChildren,
            newChildProps,
            nestedChildren
          );
          break;
        default:
          newProps = this.mapObjectTypeChildren(child, newProps, newChildProps, nestedChildren);
          break;
      }
    });
    return this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
  }
  render() {
    const { children, ...props } = this.props;
    let newProps = { ...props };
    let { helmetData } = props;
    if (children) {
      newProps = this.mapChildrenToProps(children, newProps);
    }
    if (helmetData && !(helmetData instanceof HelmetData)) {
      const data = helmetData;
      helmetData = new HelmetData(data.context, true);
      delete newProps.helmetData;
    }
    return helmetData ? /* @__PURE__ */ React3.createElement(HelmetDispatcher, { ...newProps, context: helmetData.value }) : /* @__PURE__ */ React3.createElement(Context.Consumer, null, (context) => /* @__PURE__ */ React3.createElement(HelmetDispatcher, { ...newProps, context }));
  }
}, __publicField(_b, "defaultProps", {
  defer: true,
  encodeSpecialCharacters: true,
  prioritizeSeoTags: false
}), _b);
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "RetainSure - Stop Churn, Unlock Upsell, Grow Smarter | AI-Powered Customer Success" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Transform your customer success strategy with RetainSure's AI-powered platform. Get accurate churn predictions, spot upsell opportunities, and take personalized action at scale. Trusted by leading CS teams." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "customer success, churn prediction, upsell opportunities, AI customer success, customer retention, SaaS analytics, customer success platform, churn prevention" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "RetainSure - Stop Churn, Unlock Upsell, Grow Smarter" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Transform your customer success strategy with RetainSure's AI-powered platform. Get accurate churn predictions, spot upsell opportunities, and take personalized action at scale." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "RetainSure - Stop Churn, Unlock Upsell, Grow Smarter" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Transform your customer success strategy with RetainSure's AI-powered platform. Get accurate churn predictions, spot upsell opportunities, and take personalized action at scale." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "name": "RetainSure - AI-Powered Customer Success Platform",
            "description": "Stop churn, unlock upsell opportunities, and grow smarter with RetainSure's AI-powered customer success platform.",
            "url": "https://retainsure.com/"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How accurate are RetainSure's churn/upsell predictions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RetainSure's predictions are 1.5 to 2 times more accurate than traditional health scores. The models learn from your historical churn and expansion data, factoring in sentiment across communication channels, behaviour patterns, product usage, and industry or regional context to deliver highly personalised insights."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to set up RetainSure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most customers are up and running within 48 hours. The integration process is simple, and since insights are powered by AI, there's minimal setup required after connecting your data sources."
                }
              },
              {
                "@type": "Question",
                "name": "What integrations does RetainSure support?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RetainSure currently integrates with HubSpot, Salesforce, Metabase, Amplitude, Mixpanel, Chargebee, and Stripe. We also build new integrations on request—typically within 7 days."
                }
              },
              {
                "@type": "Question",
                "name": "Is my customer data secure with RetainSure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. RetainSure is SOC 2 Type 2 compliant and GDPR ready. We use enterprise-grade encryption, regular security audits, and follow industry best practices for data protection. Your data is processed securely with RetainSure."
                }
              },
              {
                "@type": "Question",
                "name": "What kind of support do you provide?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide comprehensive onboarding, dedicated customer success managers, 24/7 technical support, regular training sessions, and a dedicated Slack channel for swift communication. Our team is committed to ensuring you get maximum value from RetainSure."
                }
              }
            ]
          },
          {
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "RetainSure"
            },
            "author": {
              "@type": "Person",
              "name": "Wendy Zingher"
            },
            "reviewBody": "I just love RetainSure's predictions. Accurate predictions and concise, actionable explanations of churn risk and upsell saving my team and me 2+ hours daily. I love that it reflects all the right reasons that accounts are at risk without us handcrafting a health score."
          },
          {
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "RetainSure"
            },
            "author": {
              "@type": "Person",
              "name": "Sridhar Kowtal"
            },
            "reviewBody": "RetainSure has put our customer success program on steroids. Preparing MBRs used to take up the entire last week of the month, but now it's down to just 2 minutes per customer. The AI gives us everything we need, data, insights, and next steps, so our team can focus on driving real outcomes."
          },
          {
            "@type": "Review",
            "itemReviewed": {
              "@type": "SoftwareApplication",
              "name": "RetainSure"
            },
            "author": {
              "@type": "Person",
              "name": "Sanjana Shankar"
            },
            "reviewBody": "Upsell is a key motion for our CS team, especially with our self-serve customers—but doing it at scale was always a challenge. RetainSure's upsell predictions changed that. It helped us zero in on high-potential accounts, understand exactly what they needed to upgrade, and even gave us personalized email drafts to reach out. We saw a 20x ROI from just the first month of using it."
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4 sm:space-y-6", children: /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight", style: { color: "#022610" }, children: [
          "Your AI Customer Success Manager",
          " ",
          /* @__PURE__ */ jsx("span", { className: "block text-xl sm:text-2xl lg:text-4xl mt-4", style: { color: "#039143" }, children: "Onboarding. Retention. Expansion" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 sm:space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base sm:text-lg", style: { color: "#022610" }, children: "Grow revenue with 2× more accurate predictions" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base sm:text-lg", style: { color: "#022610" }, children: "Give 2 hours back to your CSMs every day" }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-base sm:text-lg", style: { color: "#022610" }, children: "Automate tasks with AI agents" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-2 sm:pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 sm:gap-4", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => window.location.href = "/book-a-demo",
              className: "group text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90 flex-1 sm:flex-initial",
              style: { backgroundColor: "#039143" },
              children: [
                /* @__PURE__ */ jsx("span", { children: "Book a Demo" }),
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/interactive-demo",
              className: "group border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-gray-50 flex-1 sm:flex-initial",
              style: { borderColor: "#039143", color: "#039143" },
              children: [
                /* @__PURE__ */ jsx("span", { children: "Try Interactive Demo" }),
                /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl shadow-2xl overflow-hidden aspect-video", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          src: "https://www.youtube.com/embed/BBOtEJbF9T8?si=z02q2MLPNNj_RVzj",
          title: "RetainSure Product Demo",
          className: "w-full h-full",
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
          allowFullScreen: true
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-white py-8 sm:py-12 border-t border-gray-100", "aria-label": "Trusted by leading companies", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-8 sm:mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "Trusted by customer success teams at" }) }),
      /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex animate-scroll space-x-8 sm:space-x-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-8 sm:space-x-16 items-center min-w-max", children: [
          /* @__PURE__ */ jsx("img", { src: "/MailmodoLogo.png", alt: "Mailmodo", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/LimeChat.png", alt: "LimeChat", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/LambdaTestLogo.png", alt: "LambdaTest", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/tranzact-logo.png", alt: "Tranzact", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-8 sm:space-x-16 items-center min-w-max", children: [
          /* @__PURE__ */ jsx("img", { src: "/MailmodoLogo.png", alt: "Mailmodo", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/LimeChat.png", alt: "LimeChat", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/LambdaTestLogo.png", alt: "LambdaTest", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" }),
          /* @__PURE__ */ jsx("img", { src: "/tranzact-logo.png", alt: "Tranzact", className: "h-12 sm:h-20 w-auto max-w-[120px] sm:max-w-[200px] object-contain" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white", "aria-label": "CS Leader Insights", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12 sm:mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "80% CS leaders told us this. Do you feel the same?" }) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-16 sm:space-y-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-1", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/watermelon_accounts.jpeg",
              alt: "Dashboard showing watermelon accounts with misleading health scores",
              className: "w-full h-auto rounded-2xl shadow-lg border border-gray-200"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1 lg:order-2", children: [
            /* @__PURE__ */ jsx("blockquote", { className: "text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-tight", style: { color: "#022610" }, children: '"My health scores are not accurate. I see so many watermelon accounts."' }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl leading-relaxed", style: { color: "#022610", opacity: 0.75 }, children: "Health looked green, reality was red. They needed truth, not scores pretending everything was fine." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1", children: [
            /* @__PURE__ */ jsx("blockquote", { className: "text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-tight", style: { color: "#022610" }, children: '"My CSMs are short on bandwidth— I want to automate a lot of workflows without missing the human touch."' }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl leading-relaxed", style: { color: "#022610", opacity: 0.75 }, children: "They needed automation without templates, so the human touch isn't lost" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-2", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/auatomation_error_homepage.jpeg",
              alt: "Automation errors and parameter issues in workflows",
              className: "w-full h-auto rounded-2xl shadow-lg border border-gray-200"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-1", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/dashboards_homepage.jpeg",
              alt: "Multiple dashboards showing the complexity of data management",
              className: "w-full h-auto rounded-2xl shadow-lg border border-gray-200"
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1 lg:order-2", children: [
            /* @__PURE__ */ jsx("blockquote", { className: "text-2xl sm:text-3xl lg:text-4xl font-medium italic leading-tight", style: { color: "#022610" }, children: `"It's messy to look at 100 dashboards… why can't I get proactive insghts?"` }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl leading-relaxed", style: { color: "#022610", opacity: 0.75 }, children: "All they wanted was someone (maybe AI) to give proactive insights" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "testimonials", className: "py-12 sm:py-20 bg-white", "aria-label": "Customer testimonials", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "What our customers say about us" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl max-w-3xl mx-auto", style: { color: "#022610", opacity: 0.7 }, children: "Hear from customer success leaders who've transformed their retention strategies" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxs("article", { className: "bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/WendyHeadshot.jpeg",
                alt: "Wendy Zingher",
                className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold mb-1", style: { color: "#022610" }, children: "Wendy Zingher" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-medium", style: { color: "#039143" }, children: "VP of Customer Success, LambdaTest" })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-center flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base lg:text-lg leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: `"I just love RetainSure's predictions. Accurate predictions and concise, actionable explanations of churn risk and upsell saving my team and me 2+ hours daily. I love that it reflects all the right reasons that accounts are at risk without us handcrafting a health score."` }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-auto pt-4 sm:pt-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/LambdaTestLogo.png",
                alt: "LambdaTest",
                className: "h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/SridharHeadshot.jpg",
                alt: "Sridhar Kowtal",
                className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold mb-1", style: { color: "#022610" }, children: "Sridhar Kowtal" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-medium", style: { color: "#039143" }, children: "Head of Customer Success, LimeChat" })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-center flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base lg:text-lg leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: `"RetainSure has put our customer success program on steroids. Preparing MBRs used to take up the entire last week of the month, but now it's down to just 2 minutes per customer. The AI gives us everything we need, data, insights, and next steps, so our team can focus on driving real outcomes."` }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-auto pt-4 sm:pt-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/LimeChat.png",
                alt: "LimeChat",
                className: "h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col md:col-span-2 lg:col-span-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 sm:mb-6", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/SanjanaHeadShot.jpg",
                alt: "Sanjana Shankar",
                className: "w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-3 sm:mb-4 object-cover border-2 border-gray-200"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold mb-1", style: { color: "#022610" }, children: "Sanjana Shankar" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs sm:text-sm font-medium", style: { color: "#039143" }, children: "Head of Customer Success, Mailmodo" })
          ] }),
          /* @__PURE__ */ jsxs("blockquote", { className: "text-center flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base lg:text-lg leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: `"Upsell is a key motion for our CS team, especially with our self-serve customers—but doing it at scale was always a challenge. RetainSure's upsell predictions changed that. It helped us zero in on high-potential accounts, understand exactly what they needed to upgrade, and even gave us personalized email drafts to reach out. We saw a 20x ROI from just the first month of using it."` }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mt-auto pt-4 sm:pt-6", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/MailmodoLogo.png",
                alt: "Mailmodo",
                className: "h-12 sm:h-16 w-auto max-w-[120px] sm:max-w-[160px] object-contain"
              }
            ) })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "data-security", className: "py-12 sm:py-16 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100", "aria-label": "Data security and compliance", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold", style: { color: "#022610" }, children: "Your Data, Our Priority" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg mt-3 sm:mt-4 max-w-md", style: { color: "#022610", opacity: 0.7 }, children: "Enterprise-grade security and compliance you can trust" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-6 sm:gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-6 sm:gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/SOCbadge.png",
                alt: "SOC 2 Type 2 Compliance",
                className: "w-20 h-20 sm:w-28 sm:h-28 object-contain"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-sm sm:text-base font-bold text-center", style: { color: "#022610" }, children: "SOC 2 Type 2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: "/GDPRBadge.png",
                alt: "GDPR Compliance",
                className: "w-20 h-20 sm:w-28 sm:h-28 object-contain"
              }
            ),
            /* @__PURE__ */ jsx("h3", { className: "text-sm sm:text-base font-bold text-center", style: { color: "#022610" }, children: "GDPR" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://trust.retainsure.com",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 hover:opacity-90",
            style: { backgroundColor: "#039143" },
            children: [
              /* @__PURE__ */ jsx("span", { children: "Visit Trust Center" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "faq", className: "py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white", "aria-label": "Frequently asked questions", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 sm:mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl max-w-3xl mx-auto", style: { color: "#022610", opacity: 0.7 }, children: "Get answers to common questions about RetainSure" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-4 sm:space-y-6", children: [
        /* @__PURE__ */ jsx("div", { className: "group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4", style: { color: "#022610" }, children: "How accurate are RetainSure's churn/upsell predictions?" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0", style: { color: "#039143" } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 sm:pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "RetainSure's predictions are 1.5 to 2 times more accurate than traditional health scores. The models learn from your historical churn and expansion data, factoring in sentiment across communication channels, behaviour patterns, product usage, and industry or regional context to deliver highly personalised insights." }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4", style: { color: "#022610" }, children: "How long does it take to set up RetainSure?" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0", style: { color: "#039143" } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 sm:pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Most customers are up and running within 48 hours. The integration process is simple, and since insights are powered by AI, there's minimal setup required after connecting your data sources." }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4", style: { color: "#022610" }, children: "What integrations does RetainSure support?" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0", style: { color: "#039143" } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 sm:pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "RetainSure currently integrates with HubSpot, Salesforce, Metabase, Amplitude, Mixpanel, Chargebee, and Stripe. We also build new integrations on request—typically within 7 days." }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4", style: { color: "#022610" }, children: "Is my customer data secure with RetainSure?" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0", style: { color: "#039143" } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 sm:pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Absolutely. RetainSure is SOC 2 Type 2 compliant and GDPR ready. We use enterprise-grade encryption, regular security audits, and follow industry best practices for data protection. Your data is processed securely with RetainSure." }) }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "p-6 sm:p-8 cursor-pointer", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-bold group-hover:text-opacity-80 transition-all duration-200 pr-4", style: { color: "#022610" }, children: "What kind of support do you provide?" }),
            /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-180 transition-transform duration-300 flex-shrink-0", style: { color: "#039143" } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 sm:mt-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-96 transition-all duration-500 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "border-t border-gray-100 pt-4 sm:pt-6", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We provide comprehensive onboarding, dedicated customer success managers, 24/7 technical support, regular training sessions, and a dedicated Slack channel for swift communication. Our team is committed to ensuring you get maximum value from RetainSure." }) }) })
        ] }) })
      ] })
    ] }) })
  ] });
}
function ContactUs() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load();
      }
    };
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Contact Us - RetainSure | Get in Touch with Our Customer Success Experts" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Contact RetainSure for support, demos, or questions about our AI-powered customer success platform. Email us at support@retainsure.com or book a free consultation." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "contact RetainSure, customer success support, demo booking, RetainSure contact information" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/contact-us" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/contact-us" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Contact Us - RetainSure | Get in Touch" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Contact RetainSure for support, demos, or questions about our AI-powered customer success platform." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/contact-us" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Contact Us - RetainSure | Get in Touch" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Contact RetainSure for support, demos, or questions about our AI-powered customer success platform." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Us - RetainSure",
        "description": "Contact RetainSure for support, demos, or questions about our AI-powered customer success platform.",
        "url": "https://retainsure.com/contact-us"
      }) })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "py-12 bg-gradient-to-r from-white to-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "text-center max-w-3xl mx-auto", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold mb-6", style: { color: "#022610" }, children: "Get in Touch" }) }) }) }),
    /* @__PURE__ */ jsx("main", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("section", { className: "grid md:grid-cols-2 gap-8 mb-16", "aria-label": "Contact information", children: [
        /* @__PURE__ */ jsx("article", { className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300", itemScope: true, itemType: "https://schema.org/ContactPoint", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Mail, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", style: { color: "#022610" }, itemProp: "name", children: "Email Support" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "For inquiries, support, or questions about our platform:" }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "mailto:support@retainsure.com",
                itemProp: "email",
                className: "inline-flex items-center text-lg font-semibold hover:opacity-70 transition-opacity",
                style: { color: "#039143" },
                children: "support@retainsure.com"
              }
            )
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("article", { className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300", itemScope: true, itemType: "https://schema.org/PostalAddress", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(MapPin, { className: "w-8 h-8 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", style: { color: "#022610" }, children: "Office Address" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "Send mail to our headquarters:" }),
            /* @__PURE__ */ jsxs("div", { className: "text-base space-y-1", style: { color: "#022610", opacity: 0.7 }, children: [
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "RetainSure Technologies Private Limited" }),
              /* @__PURE__ */ jsx("p", { itemProp: "streetAddress", children: "#17, 2nd floor, 7th Main Road, ll Stage Indiranagar" }),
              /* @__PURE__ */ jsxs("p", { children: [
                /* @__PURE__ */ jsx("span", { itemProp: "addressLocality", children: "Bangalore" }),
                " - ",
                /* @__PURE__ */ jsx("span", { itemProp: "postalCode", children: "560038" }),
                ", ",
                /* @__PURE__ */ jsx("span", { itemProp: "addressCountry", children: "India" })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden", "aria-label": "Book a consultation", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-50 to-white p-8 border-b border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6 text-white" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl lg:text-4xl font-bold", style: { color: "#022610" }, children: "Book a Free Consultation" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: "Ready to transform your customer success strategy? We'd love to hear your current pain points and help you solve those with or without RetainSure product :)" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-2xl p-6", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "meetings-iframe-container w-full",
            "data-src": "https://meetings.hubspot.com/dhiraj16?embed=true",
            style: { width: "100%", minHeight: "700px" }
          }
        ) }) }) })
      ] })
    ] }) }) })
  ] });
}
function BookDemo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
    script.type = "text/javascript";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      if (window.HubSpotConversations) {
        window.HubSpotConversations.widget.load();
      }
    };
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Book a Demo - RetainSure | See Our AI-Powered Customer Success Platform in Action" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Book a personalized demo of RetainSure's AI-powered customer success platform. See how we help reduce churn and identify upsell opportunities with accurate predictions." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "RetainSure demo, customer success demo, AI platform demo, churn prediction demo, book demo" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/book-a-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/book-a-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Book a Demo - RetainSure | See Our AI Platform in Action" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Book a personalized demo of RetainSure's AI-powered customer success platform. See how we help reduce churn and identify upsell opportunities." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/book-a-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Book a Demo - RetainSure | See Our AI Platform in Action" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Book a personalized demo of RetainSure's AI-powered customer success platform. See how we help reduce churn and identify upsell opportunities." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Book a Demo - RetainSure",
        "description": "Book a personalized demo of RetainSure's AI-powered customer success platform. See how we help reduce churn and identify upsell opportunities with accurate predictions.",
        "url": "https://retainsure.com/book-a-demo"
      }) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden", "aria-label": "Demo booking", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-50 to-white p-8 border-b border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Play, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold", style: { color: "#022610" }, children: "Book a Demo" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: "Do you know what happens when a rockstar team like yours meets RetainSure? Magic!🪄✨" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-50 rounded-2xl p-6", children: /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "meetings-iframe-container w-full",
          "data-src": "https://meetings.hubspot.com/dhiraj16?embed=true",
          style: { width: "100%", minHeight: "700px" }
        }
      ) }) }) })
    ] }) }) }) })
  ] });
}
function Features() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Features - AI-Powered Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Discover RetainSure's powerful AI features: churn predictions, RetainAI copilot, account overviews, automation builder, dashboards, and segmentation tools to transform your customer success strategy." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "AI predictions, churn prediction, upsell opportunities, RetainAI, account management, automation builder, customer success dashboards, account segmentation" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/features" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/features" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Features - AI-Powered Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Discover RetainSure's powerful AI features: churn predictions, RetainAI copilot, account overviews, automation builder, dashboards, and segmentation tools." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/features" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Features - AI-Powered Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Discover RetainSure's powerful AI features: churn predictions, RetainAI copilot, account overviews, automation builder, dashboards, and segmentation tools." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "RetainSure Features",
        "description": "Comprehensive AI-powered customer success features including churn predictions, automation, and intelligent insights.",
        "url": "https://retainsure.com/features"
      }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-20 bg-gradient-to-br from-white to-green-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "Powerful Features Built for AI first Customer Success" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl leading-relaxed", style: { color: "#022610", opacity: 0.75 }, children: "Everything you need to predict, prevent, and prosper. Our AI-driven platform gives you the tools to transform customer success from reactive to proactive." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-20 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-16 sm:space-y-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "AI Predictions for Churn and Upsell" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Get accurate, AI-driven predictions that identify at-risk customers before they churn, giving you time to take proactive action" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Discover hidden upsell and expansion opportunities with intelligent analysis of customer behavior, usage patterns, and engagement signals" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Move beyond traditional health scores to predictive insights that actually reflect customer reality, eliminating watermelon accounts" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/prediction.jpeg",
            alt: "AI Predictions for Churn and Upsell - Dashboard showing churn risk and expansion opportunities",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-1", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/retainaichat.jpeg",
            alt: "RetainAI - AI-powered copilot for customer success automation and intelligent recommendations",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1 lg:order-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "RetainAI" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Your AI copilot that provides intelligent daily planning, prioritizing the accounts and actions that matter most for your success metrics" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Receive proactive recommendations based on real-time customer data, helping you stay ahead of issues and spot opportunities instantly" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Automate routine tasks while maintaining the personal touch your customers expect, freeing your team to focus on high-impact relationships" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "Account Overviews" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Get a complete 360-degree view of every customer account with all critical data, interactions, and insights in one centralized location" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Access comprehensive customer history, engagement timelines, and product usage analytics to make informed decisions quickly" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Understand customer sentiment, health trends, and key milestones at a glance with intuitive visualizations and smart summaries" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/accountoverview.jpeg",
            alt: "Account Overviews - 360-degree view of customer accounts with comprehensive insights",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-1", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/aiworkflowbuilder.jpeg",
            alt: "AI Automation Builder - Build intelligent workflows without coding",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1 lg:order-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "AI Automation Builder" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Build intelligent automation workflows without coding, using natural language to create sophisticated customer success playbooks" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Scale personalized outreach with AI-powered templates that adapt to each customer's context, never sending generic messages" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Trigger smart actions based on customer behavior, product usage, or business events to respond at exactly the right moment" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "Dashboarding" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Replace dozens of scattered dashboards with one unified view that surfaces the metrics and insights that truly matter for your CS goals" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Track portfolio health, renewal forecasts, expansion pipeline, and team performance with customizable, real-time visualizations" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Get executive-ready reports and insights automatically generated, making it easy to communicate value and impact to leadership" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative order-2", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/dashboarding.jpeg",
            alt: "Dashboarding - Unified view of customer success metrics and insights",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "relative order-2 lg:order-1", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/aisegmentation-alt.jpeg",
            alt: "Account Segmentation - AI-powered customer segmentation with dynamic grouping",
            className: "w-full aspect-[1650/1170] object-cover rounded-2xl shadow-lg border border-gray-200"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 sm:space-y-8 order-1 lg:order-2", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight", style: { color: "#022610" }, children: "Account Segmentation" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Create dynamic customer segments using AI-powered clustering that identifies meaningful patterns in your customer base automatically" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Target specific customer groups with tailored strategies based on industry, size, usage patterns, lifecycle stage, or custom criteria" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
              /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 sm:w-6 sm:h-6 mt-0.5 flex-shrink-0", style: { color: "#039143" } }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Optimize resource allocation by understanding which customer segments drive the most value and where to invest your team's time" })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 sm:py-24 bg-gradient-to-br from-white to-green-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "Ready to Transform Your Customer Success?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl mb-8 sm:mb-10 leading-relaxed", style: { color: "#022610", opacity: 0.75 }, children: "See how RetainSure's AI-powered features can help you predict churn, unlock growth, and scale your customer success operations." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "/book-a-demo",
            className: "group text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:opacity-90",
            style: { backgroundColor: "#039143" },
            children: [
              /* @__PURE__ */ jsx("span", { children: "Book a Demo" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/interactive-demo",
            className: "group border-2 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 hover:bg-gray-50",
            style: { borderColor: "#039143", color: "#039143" },
            children: [
              /* @__PURE__ */ jsx("span", { children: "Try Interactive Demo" }),
              /* @__PURE__ */ jsx(Play, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
            ]
          }
        )
      ] })
    ] }) }) })
  ] });
}
const supabaseUrl = "https://xaernugnwaayxtdcpnol.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJudWdud2FheXh0ZGNwbm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTE1NDYsImV4cCI6MjA3OTYyNzU0Nn0.wjgkE7_DRXUJOtYizfyONLXsZIJj1CN2FFgypz5bf08";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchCaseStudies();
  }, []);
  const fetchCaseStudies = async () => {
    try {
      setLoading(true);
      const { data, error: error2 } = await supabase.from("case_studies").select("*").eq("is_published", true).order("display_order", { ascending: true });
      if (error2) throw error2;
      setCaseStudies(data || []);
    } catch (err) {
      setError("Failed to load case studies. Please try again later.");
      console.error("Error fetching case studies:", err);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Customer Success Stories | RetainSure Case Studies" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Explore how leading companies use RetainSure to reduce churn, increase retention, and drive customer success. Real case studies with proven results." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "customer success case studies, churn reduction, retention stories, RetainSure customers, customer success examples" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/case-studies" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/case-studies" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Customer Success Stories | RetainSure Case Studies" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Explore how leading companies use RetainSure to reduce churn, increase retention, and drive customer success. Real case studies with proven results." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/case-studies" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Customer Success Stories | RetainSure Case Studies" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Explore how leading companies use RetainSure to reduce churn, increase retention, and drive customer success." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Customer Success Stories | RetainSure Case Studies",
        "description": "Explore how leading companies use RetainSure to reduce churn, increase retention, and drive customer success. Real case studies with proven results.",
        "url": "https://retainsure.com/case-studies"
      }) })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto space-y-6 sm:space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 sm:space-y-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base font-semibold tracking-wide uppercase", style: { color: "#039143" }, children: "CASE STUDIES" }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight", style: { color: "#022610" }, children: "Customer success stories that drive results" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg lg:text-xl max-w-3xl mx-auto", style: { color: "#022610", opacity: 0.7 }, children: "Discover how customer success teams are using RetainSure to predict churn, identify upsell opportunities, and take personalized action at scale" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-2 sm:pt-4", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => window.location.href = "/book-a-demo",
          className: "group text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 hover:opacity-90",
          style: { backgroundColor: "#039143" },
          children: [
            /* @__PURE__ */ jsx("span", { children: "Book a Demo" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-4 sm:px-6 pb-12 sm:pb-20", children: [
      loading && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 sm:p-8 animate-pulse",
          style: { minHeight: "400px" },
          children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-32 bg-gray-300 rounded-lg" }),
            /* @__PURE__ */ jsx("div", { className: "h-8 bg-gray-300 rounded w-3/4" }),
            /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-300 rounded w-full" }),
            /* @__PURE__ */ jsx("div", { className: "h-4 bg-gray-300 rounded w-5/6" })
          ] })
        },
        i
      )) }),
      error && !loading && /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#022610", opacity: 0.7 }, children: error }) }),
      !loading && !error && caseStudies.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center py-12", children: /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#022610", opacity: 0.7 }, children: "No case studies available at the moment. Check back soon!" }) }),
      !loading && !error && caseStudies.length > 0 && /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8", children: caseStudies.map((caseStudy) => /* @__PURE__ */ jsxs(
        "article",
        {
          className: `bg-gradient-to-br ${caseStudy.background_color} rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col space-y-6`,
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center bg-white rounded-xl p-6 min-h-[180px]", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: caseStudy.image_url,
                alt: caseStudy.company_name,
                className: "max-h-24 w-auto object-contain"
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl sm:text-5xl font-bold", style: { color: "#039143" }, children: caseStudy.metric_value }),
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base font-semibold", style: { color: "#022610", opacity: 0.8 }, children: caseStudy.metric_label })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-3", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl sm:text-2xl font-bold leading-tight", style: { color: "#022610" }, children: caseStudy.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: caseStudy.subtitle })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "pt-4 border-t border-gray-200", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", style: { color: "#039143" }, children: caseStudy.company_name }) })
          ]
        },
        caseStudy.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-r from-green-50 to-white py-12 sm:py-16 border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6", style: { color: "#022610" }, children: "Ready to write your success story?" }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto", style: { color: "#022610", opacity: 0.7 }, children: "Join leading customer success teams who are transforming their retention and expansion strategies with RetainSure" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => window.location.href = "/book-a-demo",
          className: "group text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2 hover:opacity-90",
          style: { backgroundColor: "#039143" },
          children: [
            /* @__PURE__ */ jsx("span", { children: "Book a Demo" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
          ]
        }
      )
    ] }) })
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
      /* @__PURE__ */ jsx("title", { children: "Page Not Found - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "The page you're looking for doesn't exist." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-center px-4 max-w-lg", children: [
      /* @__PURE__ */ jsx("p", { className: "text-8xl font-bold mb-4", style: { color: "#039143" }, children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", style: { color: "#022610" }, children: "Page not found" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", style: { color: "#022610", opacity: 0.7 }, children: "The page you're looking for doesn't exist or has been moved." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "group inline-flex items-center space-x-2 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:opacity-90",
          style: { backgroundColor: "#039143" },
          children: [
            /* @__PURE__ */ jsx("span", { children: "Back to Home" }),
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
          ]
        }
      )
    ] })
  ] });
}
const features = [
  {
    name: "AI Predictions for churn and upsell",
    icon: /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5" }),
    lowTouch: true,
    highTouch: true
  },
  {
    name: "RetainAI (Chat with Data)",
    icon: /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5" }),
    lowTouch: false,
    highTouch: true
  },
  {
    name: "Account Overviews",
    icon: /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5" }),
    lowTouch: false,
    highTouch: true
  },
  {
    name: "AI automations builder",
    icon: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5" }),
    lowTouch: true,
    highTouch: true
  },
  {
    name: "Dashboarding",
    icon: /* @__PURE__ */ jsx(ChartBar, { className: "w-5 h-5" }),
    lowTouch: "Default Dashboards",
    highTouch: "Customizable"
  },
  {
    name: "Account Segmentation",
    icon: /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5" }),
    lowTouch: false,
    highTouch: "Unlimited Segments"
  },
  {
    name: "Tracked Metrics",
    icon: /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5" }),
    lowTouch: "Unlimited",
    highTouch: "Unlimited"
  },
  {
    name: "Hyper-personalised AI-generated email sending",
    icon: /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5" }),
    lowTouch: true,
    highTouch: true
  },
  {
    name: "CSM seats",
    icon: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5" }),
    lowTouch: "Unlimited seats",
    highTouch: "Unlimited seats"
  }
];
function Pricing() {
  const handleTalkToFounder = () => {
    window.location.href = "/book-a-demo";
  };
  const renderFeatureValue = (value, isHighTouch = false) => {
    if (typeof value === "boolean") {
      if (value) {
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Check, { className: "w-5 h-5", style: { color: "#039143" } }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", style: { color: "#039143" }, children: "Included" })
        ] });
      } else {
        return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-300" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-400", children: "Not included" })
        ] });
      }
    }
    return /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
      /* @__PURE__ */ jsx(Check, { className: "w-5 h-5", style: { color: "#039143" } }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", style: { color: "#022610" }, children: value })
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-green-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Pricing - RetainSure | Custom Plans for Every Team" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Flexible pricing plans designed for teams of all sizes. Choose between Low-Touch and High-Touch accounts with custom pricing tailored to your needs." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "customer success pricing, CS platform pricing, custom pricing, enterprise pricing, customer retention pricing" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/pricing" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/pricing" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Pricing - RetainSure | Custom Plans for Every Team" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Flexible pricing plans designed for teams of all sizes. Choose between Low-Touch and High-Touch accounts with custom pricing tailored to your needs." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/pricing" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Pricing - RetainSure | Custom Plans for Every Team" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Flexible pricing plans designed for teams of all sizes. Choose between Low-Touch and High-Touch accounts with custom pricing." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "RetainSure Pricing",
        "description": "Custom pricing plans for customer success teams",
        "url": "https://retainsure.com/pricing"
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-4xl mx-auto mb-16 sm:mb-20", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold mb-6", style: { color: "#022610" }, children: "Simple, Transparent Pricing" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed", children: "Choose the plan that fits your team's needs. Custom pricing designed to scale with your growth." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleTalkToFounder,
            className: "group inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
            style: { backgroundColor: "#039143" },
            children: [
              /* @__PURE__ */ jsx("span", { children: "Talk to Founder" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto mb-16", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 bg-gradient-to-br from-white to-gray-50 border-b border-r border-gray-200" }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gradient-to-br from-white to-gray-50 border-b border-r border-gray-200", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold mb-2", style: { color: "#022610" }, children: "Low Touch Accounts" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Perfect for teams managing high-volume customer bases" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleTalkToFounder,
                className: "w-full text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200",
                style: { backgroundColor: "#039143" },
                children: "Talk to Founder"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gradient-to-br from-green-50 to-white border-b border-gray-200 relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold", style: { backgroundColor: "#039143" }, children: "MOST POPULAR" }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl sm:text-2xl font-bold mb-2", style: { color: "#022610" }, children: "High Touch Accounts" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-6", children: "Complete solution for strategic customer relationships" }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handleTalkToFounder,
                className: "w-full text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200",
                style: { backgroundColor: "#039143" },
                children: "Talk to Founder"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "divide-y divide-gray-200", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: `grid grid-cols-3 gap-4 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-green-50/30 transition-colors duration-150`,
            children: [
              /* @__PURE__ */ jsx("div", { className: "p-6 border-r border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", style: { color: "#039143" }, children: feature.icon }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-800", children: feature.name })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "p-6 border-r border-gray-200 flex items-center", children: renderFeatureValue(feature.lowTouch) }),
              /* @__PURE__ */ jsx("div", { className: "p-6 flex items-center", children: renderFeatureValue(feature.highTouch, true) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-4", style: { color: "#022610" }, children: "Not sure which plan is right for you?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8", children: "Schedule a call with our founder to discuss your specific needs and get a custom quote." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleTalkToFounder,
            className: "group inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
            style: { backgroundColor: "#039143" },
            children: [
              /* @__PURE__ */ jsx("span", { children: "Talk to Founder" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" })
            ]
          }
        )
      ] })
    ] })
  ] });
}
function TermsOfService() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Terms of Service - RetainSure | Legal Terms and Conditions" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "RetainSure's Terms of Service govern your use of our AI-powered customer success platform. Read our legal terms and conditions." }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/terms-of-service" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/terms-of-service" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Terms of Service - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "RetainSure's Terms of Service govern your use of our AI-powered customer success platform." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "py-16 bg-gradient-to-r from-white to-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold", style: { color: "#022610" }, children: "Terms of Service" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mt-2", style: { color: "#039143" }, children: "Effective Date: May 14, 2025" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 mt-2 text-sm", style: { color: "#022610", opacity: 0.6 }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Last updated: Nov 10, 2025" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: 'These Terms of Service ("Terms") govern your access to and use of the services provided by RetainSure Technologies Pvt. Ltd. ("RetainSure", "we", "our", or "us"). By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.' })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("article", { className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "1. Eligibility" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "You must be at least 18 years old and have the authority to enter into these Terms on behalf of yourself or the entity you represent." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "2. Account Registration" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "You agree to provide accurate, complete, and current information when registering for the Services. You are responsible for maintaining the confidentiality of your login credentials and all activity under your account" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "3. Use of Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "You may only use the Services for lawful, internal business purposes. You agree not to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base mb-4", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("li", { children: "Copy, modify, reverse-engineer, or decompile the platform" }),
          /* @__PURE__ */ jsx("li", { children: "Transmit harmful or illegal content" }),
          /* @__PURE__ */ jsx("li", { children: "Interfere with the functionality or security of the Services" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "4. Data and Privacy" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "You retain ownership of your data. By using our Services, you grant RetainSure a license to use, process, and store your data to operate and improve the Services. Refer to our Privacy Policy for more information." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "5. Intellectual Property" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "All intellectual property in the platform (including software, trademarks, and content) belongs to RetainSure or its licensors. You may not use this IP except as permitted under these Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "6. Third-Party Services" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We integrate with third-party tools (e.g., CRMs, analytics, billing, support systems). We are not responsible for these third-party services and disclaim liability for any issues arising from their use." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "7. Fees and Payment" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "If applicable, subscription fees, billing cycles, and payment terms will be outlined in a separate agreement or order form. Fees are non-refundable unless otherwise stated. You are responsible for applicable taxes." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "8. Termination" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We may suspend or terminate your access to the Services if you violate these Terms. Upon termination, your access will cease, and we may delete your data per our data retention policy." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "9. Disclaimers" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: 'The Services are provided "as is" and "as available." We make no warranties, express or implied, and disclaim liability for loss, errors, interruptions, or inaccuracies in the Services.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "10. Limitation of Liability" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "To the maximum extent permitted by law, RetainSure is not liable for indirect, incidental, or consequential damages, including loss of profits, data, or business interruption." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "11. Indemnification" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "You agree to indemnify and hold harmless RetainSure from any claims, losses, or damages arising out of your misuse of the Services or violation of these Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "12. Governing Law" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bengaluru, Karnataka, India, unless otherwise required by law." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "13. Modifications" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We may revise these Terms at any time. We will post the updated Terms on our website with the updated effective date. Continued use of the Services constitutes acceptance of the revised Terms." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "14. Data Processing Agreement" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
          "Customers who subscribe to RetainSure's product or services automatically accept Data Processing Agreement found here: ",
          /* @__PURE__ */ jsx("a", { href: "https://retainsure.com/data-processing-agreement", className: "underline hover:opacity-70 transition-opacity", style: { color: "#039143" }, children: "https://retainsure.com/data-processing-agreement" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "contact", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "15. Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-6 rounded-xl", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "RetainSure Technologies Pvt. Ltd." }) }),
          /* @__PURE__ */ jsx("p", { children: "support@retainsure.com" }),
          /* @__PURE__ */ jsx("p", { children: "#17, 2nd floor, 7th Main Road" }),
          /* @__PURE__ */ jsx("p", { children: "ll Stage Indiranagar, Bangalore - 560038" })
        ] }) })
      ] })
    ] }) }) }) }) })
  ] });
}
function PrivacyPolicy() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Privacy Policy - RetainSure | Data Protection and Privacy Practices" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "RetainSure's Privacy Policy explains how we collect, use, and protect your data. Learn about our commitment to data security and your privacy rights." }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/privacy-policy" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/privacy-policy" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Privacy Policy - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "RetainSure's Privacy Policy explains how we collect, use, and protect your data." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "py-16 bg-gradient-to-r from-white to-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold", style: { color: "#022610" }, children: "Privacy Policy" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mt-2", style: { color: "#039143" }, children: "Effective Date: May 14, 2025" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 mt-2 text-sm", style: { color: "#022610", opacity: 0.6 }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Last updated: Nov 10, 2025" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: 'RetainSure Technologies Private Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our services, including our website, platform, and any related applications (collectively, the "Services").' }),
      /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed mt-4", style: { color: "#022610", opacity: 0.7 }, children: "By using our Services, you agree to the practices described in this Privacy Policy." })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("article", { className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "1. Information We Collect" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We collect the following types of information:" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Product Activity Data:" }),
          " Information about how users interact with our platform and integrated tools (e.g., logins, feature usage, time spent)."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Demographic Data:" }),
          " Names, email addresses, roles, and other contact or account-related details."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Conversations Data:" }),
          " Interaction logs, messages, or other communication data shared within the platform."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "2. How We Use Your Information" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We use the data we collect to:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("li", { children: "Deliver and improve our Services" }),
          /* @__PURE__ */ jsx("li", { children: "Analyse product usage and generate insights for customer success teams" }),
          /* @__PURE__ */ jsx("li", { children: "Personalise user experiences" }),
          /* @__PURE__ */ jsx("li", { children: "Monitor platform health and security" }),
          /* @__PURE__ */ jsx("li", { children: "Comply with legal obligations and protect our rights" }),
          /* @__PURE__ */ jsx("li", { children: "Provide customer support and respond to inquiries" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "3. Data Sharing and Disclosure" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We do not sell your personal data. We may share data with:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Sub Processor:" }),
            " For example, cloud infrastructure via AWS, and AI services via OpenAI"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Authorised Integrations:" }),
            " When you connect third-party tools, we access relevant data as per their API permissions"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Legal or Regulatory Bodies:" }),
            " Where required to comply with applicable laws, regulations, or legal processes"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "4. Data Storage and Security" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We do not sell your personal data. We may share data with:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Sub Processor:" }),
            " For example, cloud infrastructure via AWS, and AI services via OpenAI"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Authorised Integrations:" }),
            " When you connect third-party tools, we access relevant data as per their API permissions"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Legal or Regulatory Bodies:" }),
            " Where required to comply with applicable laws, regulations, or legal processes"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "5. International Data Transfers" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "As we serve customers in multiple countries, your data may be processed and stored in the United States, India, or Europe, where we or our service providers operate. We ensure appropriate safeguards are in place when transferring data internationally, including Standard Contractual Clauses where required." })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "sensitive-data-security", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "6. Data Protection and Security" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "RetainSure implements appropriate technical and organizational safeguards to protect sensitive information processed through the platform, including data obtained via third-party integrations and connected accounts." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Encryption in Transit" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "All data transmitted between users, third-party services, and RetainSure is encrypted in transit using industry-standard security protocols, including HTTPS and Transport Layer Security (TLS)." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Encryption at Rest" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "Sensitive data, including authentication credentials, access tokens, and customer data, is encrypted at rest. Access and refresh tokens are encrypted using managed key services, and customer data is stored in encrypted databases within our cloud infrastructure." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Access Controls and Data Isolation" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "Access to sensitive data is restricted using role-based access controls and the principle of least privilege. RetainSure enforces per-company data isolation and row-level security to ensure that customer data is accessible only to authorized users and systems associated with the relevant account." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Token Handling and Revocation" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "Authentication tokens used to connect third-party services are stored in encrypted form and used solely to provide user-authorized functionality. Users may disconnect integrated accounts at any time, upon which associated tokens are revoked and no further access to connected service data occurs." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Compliance with API Data Use Policies" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "RetainSure’s use and handling of data obtained from third-party APIs complies with applicable API provider data protection requirements, including restrictions on use, sharing, and security of such data." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "7. Your Rights" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-6", style: { color: "#022610", opacity: 0.8 }, children: "Depending on your location, you may have the following rights:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right to Be Informed" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "You have the right to know how we collect, use, share, and store your personal data." }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We provide this information in this Privacy Policy and through in-product notices where relevant." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right of Access" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "You can request a copy of the personal data we hold about you, along with details on how and why we process it." }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We will provide this information free of charge within one month of receiving your request." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right to Rectification" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "If any of the personal data we hold about you is inaccurate or incomplete, you can ask us to correct or update it." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right to Erasure (Right to Be Forgotten)" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "You can request that we delete your personal data in certain circumstances, such as:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1 text-base mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
              /* @__PURE__ */ jsx("li", { children: "When the data is no longer needed for its original purpose" }),
              /* @__PURE__ */ jsx("li", { children: "When you withdraw your consent" }),
              /* @__PURE__ */ jsx("li", { children: "When you believe your data has been processed unlawfully" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We may retain some information if required by law or for legitimate business purposes (e.g., record-keeping)." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right to Object" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "You have the right to object to how we process your data:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-1 text-base mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
              /* @__PURE__ */ jsx("li", { children: "If the processing is based on our legitimate interests" }),
              /* @__PURE__ */ jsx("li", { children: "If we use your data for direct marketing (including automated profiling)" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "If you object to marketing, we will stop sending you such communications immediately." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Rights Related to Automated Decision-Making and Profiling" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "You have the right not to be subject to decisions made solely through automated means, including profiling, if those decisions have a legal or significant effect on you." }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "You can request human review, express your views, or challenge such decisions." })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", style: { color: "#022610" }, children: "• Right to Withdraw Consent" }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "If you have given consent for us to process your data, you can withdraw it at any time." }),
            /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Withdrawing consent will not affect the lawfulness of any processing carried out before your withdrawal." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mt-6", style: { color: "#022610", opacity: 0.8 }, children: "To exercise these rights, please contact us at privacy@retainsure.com to reach our Data Protection Officer Anand Thakkar" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mt-4", style: { color: "#022610", opacity: 0.8 }, children: "For EU residents, you can reach out to our EU GDPR representative at below given address or email:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          "Rickert Rechtsanwaltsgesellschaft mbH",
          /* @__PURE__ */ jsx("br", {}),
          "RetainSure Technologies Private Limited",
          /* @__PURE__ */ jsx("br", {}),
          "Colmantstraße 15",
          /* @__PURE__ */ jsx("br", {}),
          "53115 Bonn",
          /* @__PURE__ */ jsx("br", {}),
          "Germany",
          /* @__PURE__ */ jsx("br", {}),
          "email: art-27-rep-retainsure@rickert.law"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "cookies", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "8. Cookie Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It also explains the types of cookies we use, why we use them, and how you can control your preferences." }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Necessary Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "These cookies are essential for the website to function properly. They enable basic features such as page navigation, secure access, and load balancing." }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "Without these cookies, the website cannot operate correctly." }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Purpose:" }),
          " To ensure the website and its services function securely and as intended."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Example:" }),
          " Session management, authentication, and security-related cookies."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Analytics Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously." }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Purpose:" }),
          " To improve website performance and user experience by analyzing traffic patterns, usage data, and user behavior."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Example:" }),
          " Cookies used by tools like Google Analytics or similar analytics platforms."
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-3 mt-6", style: { color: "#022610" }, children: "• Marketing Cookies" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: "These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and therefore more valuable for publishers and third-party advertisers." }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Purpose:" }),
          " To deliver personalized advertisements and promotional content based on user interests and browsing activity."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("strong", { children: "Example:" }),
          " Cookies from advertising networks or social media platforms."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "9. Data Retention" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "We retain our customer/prospect data as long as necessary for the purposes described in this policy or to meet legal obligations. You can exercise your right to get your data deleted by reaching out to us at support@retainsure.com." }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "For data shared by our customer for us to meet the purpose of the contract via source integrations for the RetainSure's product functioning will be deleted within 90 days of subscription cancellation." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "10. Children's Privacy" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Our Services are not intended for individuals under the age of 13 (or equivalent minimum age in relevant jurisdictions). We do not knowingly collect personal data from children." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "11. Changes to This Policy" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: 'We may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated version on our website and updating the "Effective Date" at the top.' }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We take the best security practices to avoid any kind of incidents or breach. In case of any breach or incident, we would let our customers and concerned parties know about the incident within 72 hours of the incident occurrence." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "12. Incident Management" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "We take the best security practices to avoid any kind of incidents or breach. In case of any breach or incident, we would let our customers and concerned parties know about the incident within 72 hours of the incident's occurrence." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "13. Contact Us" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:" }),
        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-6 rounded-xl", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
          /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "RetainSure Technologies Pvt. Ltd." }) }),
          /* @__PURE__ */ jsx("p", { children: "support@retainsure.com" }),
          /* @__PURE__ */ jsx("p", { children: "17, 2nd floor, 7th Main Road, ll Stage Indiranagar, Bangalore - 560038" })
        ] }) })
      ] })
    ] }) }) }) }) })
  ] });
}
function DataProcessingAgreement() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-white to-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Data Processing Agreement - RetainSure | GDPR Compliance and Data Protection" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "RetainSure's Data Processing Agreement outlines our GDPR compliance and data protection measures for EU customers and data subjects." }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/data-processing-agreement" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/data-processing-agreement" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Data Processing Agreement - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "RetainSure's Data Processing Agreement outlines our GDPR compliance and data protection measures." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" })
    ] }),
    /* @__PURE__ */ jsx("header", { className: "py-16 bg-gradient-to-r from-white to-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h1", { className: "text-4xl lg:text-5xl font-bold", style: { color: "#022610" }, children: "Data Processing Agreement" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-medium mt-2", style: { color: "#039143" }, children: "Effective Date: May 14, 2025" }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4 mt-2 text-sm", style: { color: "#022610", opacity: 0.6 }, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-1", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Last updated: Nov 10, 2025" })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed", style: { color: "#022610", opacity: 0.7 }, children: 'This Data Processing Agreement ("DPA") forms part of the Terms of Use (or other similarly titled written or electronic agreement addressing the same subject matter) ("Agreement") between Customer (as defined in the Agreement) and RetainSure Technologies Private Limited under which the Processor provides the Controller with the software and services (the "Services"). The Controller and the Processor are individually referred to as a "Party" and collectively as the "Parties".' })
    ] }) }) }),
    /* @__PURE__ */ jsx("main", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("article", { className: "bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-none space-y-8", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "The Parties seek to implement this DPA to comply with the requirements of EU GDPR (defined hereunder) in relation to Processor's processing of Personal Data (as defined under the EU GDPR) as part of its obligations under the Agreement." }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "This DPA shall apply to Processor's processing of Personal Data, provided by the Controller as part of Processor's obligations under the Agreement." }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Except as modified below, the terms of the Agreement shall remain in full force and effect." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "1. Definitions" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed mb-4", style: { color: "#022610", opacity: 0.8 }, children: "Terms not otherwise defined herein shall have the meaning given to them in the EU GDPR or the Agreement. The following terms shall have the corresponding meanings assigned to them below:" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.1." }),
            ' "Data Transfer" means a transfer of the Personal Data from the Controller to the Processor, or between two establishments of the Processor, or with a Sub-processor by the Processor.'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.2." }),
            ' "EU GDPR" means the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46/EC (General Data Protection Regulation).'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.3." }),
            ` "Standard Contractual Clauses" means the contractual clauses attached hereto as Schedule 1 pursuant to the European Commission's Implementing Decision (EU) 2021/914 of 4 June 2021 on Standard Contractual Clauses for the transfer of Personal Data to processors established in third countries which do not ensure an adequate level of data protection.`
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.4." }),
            ' "Controller" means the natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law.'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.5." }),
            ' "Processor" means a natural or legal person, public authority, agency, or other body which processes personal data on behalf of the controller.'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "1.6." }),
            ' "Sub-processor" means a processor/ sub-contractor appointed by the Processor for the provision of all or parts of the Services and Processes the Personal Data as provided by the Controller.'
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "2. Purpose of this Agreement" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "This DPA sets out various obligations of the Processor in relation to the Processing of Personal Data and shall be limited to the Processor's obligations under the Agreement. If there is a conflict between the provisions of the Agreement and this DPA, the provisions of this DPA shall prevail." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "3. Categories of Personal Data and Data Subjects" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "The Controller authorizes permission to the Processor to process the Personal Data to the extent of which is determined and regulated by the Controller. The current nature of the Personal Data is specified in Annex I to Schedule 1 to this DPA." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "4. Purpose of Processing" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "The objective of Processing of Personal Data by the Processor shall be limited to the Processor's provision of the Services to the Controller and or its Client, pursuant to the Agreement." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "5. Duration of Processing" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "The Processor will Process Personal Data for the duration of the Agreement, unless otherwise agreed upon in writing by the Controller." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "6. Data Controller's Obligations" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "6.1." }),
            " The Data Controller shall warrant that it has all necessary rights to provide the Personal Data to the Data Processor for the Processing to be performed in relation to the agreed services. To the extent required by Data Privacy Laws, Data Controller is responsible for ensuring that it provides such Personal Data to Data Processor based on an appropriate legal basis allowing lawful processing activities, including any necessary Data Subject consents to this Processing are obtained, and for ensuring that a record of such consents is maintained. Should such consent be revoked by the Data Subject, the Data Controller is responsible for communicating the fact of such revocation to the Data Processor."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "6.2." }),
            " The Data Controller shall provide all natural persons from whom it collects Personal Data with the relevant privacy notice."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "6.3." }),
            " The Data Controller shall request the Data Processor to purge Personal Data when required by the Data Controller or any Data Subject whom it collects Personal Data unless the Data Processor is otherwise required to retain the Personal Data by applicable law."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "6.4." }),
            " The Data Controller shall immediately advise the Data Processor in writing if it receives or learns of any:"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "6.4.1." }),
              " Complaint or allegation indicating a violation of Data Privacy Laws regarding Personal Data;"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "6.4.2." }),
              " Request from one or more individuals seeking to access, correct, or delete Personal Data;"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "6.4.3." }),
              " Inquiry or complaint from one or more individuals relating to the collection, processing, use, or transfer of Personal Data; and"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "6.4.4." }),
              " Any regulatory request, search warrant, or other legal, regulatory, administrative, or governmental process seeking Personal Data"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "7. Data Processor's Obligations" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.1." }),
            ' The Processor will follow written and documented instructions received, including email, from the Controller, its affiliate, agents, or personnel, with respect to the Processing of Personal Data (each, an "Instruction").'
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.2." }),
            " The Processing described in the Agreement and the relating documentation shall be considered as Instruction from the Controller."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.3." }),
            " At the Data Controller's request, the Data Processor will provide reasonable assistance to the Data Controller in responding to/ complying with requests/ directions by Data Subject in exercising their rights or of the applicable regulatory authorities regarding Data Processor's Processing of Personal Data."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.4." }),
            " In relation to the Personal Data, Data Processor shall obtain consent (where necessary) and/or provide notice to the Data Subject in accordance with Data Protection Laws to enable shared Personal Data to be provided to, and used by, the other Party as contemplated by this Agreement."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.5." }),
            " Where shared Personal Data is transferred outside the Data Processor's territorial boundaries, the transferor shall ensure that the recipient of such data is under contractual obligations to protect such Personal Data to the same or higher standards as those imposed under this Addendum and the Data Protection Laws."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.6." }),
            " The processor shall inform the controller if, in its opinion, a processing instruction infringes applicable legislation or regulation."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "7.7." }),
            " As A Data Processor ,taking into account the nature of the processing and the information available to the Data Processor, the Data Processor shall assist the data controller in conducting any necessary Data Protection Impact Assessments (DPIAs), as required under GDPR."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "8. Data Secrecy" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed mb-2", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "8.1." }),
            " To Process the Personal Data, the Processor will use personnel who are"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2 text-base mb-4", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "8.1.1." }),
              " Informed of the confidential nature of the Personal Data, and"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "8.1.2." }),
              " Perform the Services in accordance with the Agreement."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "8.2." }),
            " The Processor will regularly train individuals having access to Personal Data in data security and data privacy in accordance with accepted industry practice and shall ensure that all the Personal Data is kept strictly confidential."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "8.3." }),
            " The Processor will maintain appropriate technical and organizational measures for protection of the security, confidentiality, and integrity of the Personal Data as per the specifications as per the standards mutually agreed in writing by the Parties."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "9. Audit Rights" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "9.1." }),
            " Upon Controller's reasonable request, the Processor will make available to the Controller, information as is reasonably necessary to demonstrate Processor's compliance with its obligations under the EU GDPR or other applicable laws in respect of its Processing of the Personal Data."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "9.2." }),
            " When the Controller wishes to conduct the audit (by itself or through a representative) at Processor's site, it shall provide at least fifteen (15) days' prior written notice to the Processor; the Processor will provide reasonable cooperation and assistance in relation to audits, including inspections, conducted by the Controller or its representative."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "9.3." }),
            " The Controller shall bear the expense of such an audit."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "10. Mechanism of Data Transfers" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: 'Any Data Transfer for the purpose of Processing by the Processor in a country outside the European Economic Area (the "EEA") shall only take place in compliance as detailed in Schedule 1 to the DPA. Where such model clauses have not been executed at the same time as this DPA, the Processor shall not unduly withhold the execution of such template model clauses, where the transfer of Personal Data outside of the EEA is required for the performance of the Agreement.' })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "11. Sub-processors" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "11.1." }),
            " The Controller acknowledges and agrees that the Processor, may engage a third-party Sub-processor(s) in connection with the performance of the Services, provided such Sub-processor(s) take technical and organizational measures to ensure confidentiality of Personal Data shared with them; The current Sub-processors engaged by the Processors and approved by the Controller are listed in Annex III of Schedule 1 hereto. The processor shall notify the controller at least thirty (30) calendar days in advance of any intended changes or additions to its Sub-processors listed in Annex III by emailing notice of the intended change to Customer. In accordance with Article 28(4) of the GDPR, the Processor shall remain liable to Controller for any failure on behalf of a Sub-processor to fulfil its data protection obligations under the DPA in connection with the performance of the Services."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "11.2." }),
            " If the Controller has a concern that the Sub-processor(s) Processing of Personal Data is reasonably likely to cause the Controller to breach its data protection obligations under the GDPR, the Controller may object to Processor's use of such Sub-processor and the Processor and Controller shall confer in good faith to address such concern."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "12. Personal Data Breach Notification" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "12.1." }),
            " The Processor shall maintain defined procedures in case of a Personal Data Breach (as defined under the GDPR) and shall without undue delay notify Controller if it becomes aware of any Personal Data Breach unless such Data Breach is unlikely to result in a risk to the rights and freedoms of natural persons."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "12.2." }),
            " The Processor shall provide the Controller with all reasonable assistance to comply with the notification of Personal Data Breach to Supervisory Authority and/or the Data Subject, to identify the cause of such Data Breach and take such commercially reasonable steps as reasonably required to mitigate and remedy such Data Breach."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "12.3." }),
            " No Acknowledgement of Fault by Processor. Processor's notification of or response to a Personal Data Breach under this DPA will not be construed as an acknowledgement by Processor of any fault or liability with respect to the data incident."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "13. Return and Deletion of Personal Data" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "13.1." }),
            " The Processor shall at least ninty (90) days from the end of the Agreement or cessation of the Processor's Services under the Agreement, whichever occurs earlier, shall return to the Controller all the Personal Data, or if the Controller so instructs, the Processor shall have the Personal Data deleted. The Processor shall return such Personal Data in a commonly used format or in the current format in which it was stored at discretion of the Controller, soon as reasonably practicable following receipt of Controller's notification."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            /* @__PURE__ */ jsx("strong", { children: "13.2." }),
            " In any case, the Processor shall delete Personal Data including all the copies of it as soon as reasonably practicable following the end of the Agreement."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "14. Technical and Organizational Measures" }),
        /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: "Having regard to the state of technological development and the cost of implementing any measures, the Processor will take appropriate technical and organizational measures against the unauthorized or unlawful processing of Personal Data and against the accidental loss or destruction of, or damage to, Personal Data to ensure a level of security appropriate to: (a) the harm that might result from unauthorized or unlawful processing or accidental loss, destruction or damage; and (b) the nature of the data to be protected [including the measures stated in Annex II of Schedule 1]" })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", style: { color: "#022610" }, children: "15. Data Subject Rights" }),
        /* @__PURE__ */ jsxs("p", { className: "text-base leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
          "In the event a Data Subject wishes to exercise its data subject rights under applicable Data Protection Law, including, but not limited to, a data subject's right of access, correction and/or erasure of its Personal Data in RetainSure's control, the Data Subjects can submit such request done by contacting RetainSure's Data Protection Officer (DPO) below. Also, for raising concerns and/or any complaints related to the Customer Personal Data that can be done by contacting the Data Protection Officer below:",
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Name:" }),
            " Anand Thakkar"
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Email ID:" }),
            " privacy@retainsure.com"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", style: { color: "#022610" }, children: "SCHEDULE 1" }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", style: { color: "#022610" }, children: "ANNEX I" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", style: { color: "#022610" }, children: "A. LIST OF PARTIES" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Data exporter(s):" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg space-y-2 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Name:" }),
                  " Customer (As set forth in the relevant Order Form)."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Address:" }),
                  " As set forth in the relevant Order Form."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Contact person's name, position, and contact details:" }),
                  " As set forth in the relevant Order Form."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Activities relevant to the data transferred under these Clauses:" }),
                  " Recipient of the Services provided by RetainSure Technologies Private Limited in accordance with the Order Form."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Signature and date:" }),
                  " Signature and date are set out in the Order form."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Role (Controller/ Processor):" }),
                  " Controller"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Data importer(s):" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg space-y-2 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Name:" }),
                  " RetainSure Technologies Private Limited"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Address:" }),
                  " #17, 2nd floor, 7th Main Road, ll Stage Indiranagar, Bangalore - 560038"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Contact person's name, position, and contact details:" }),
                  " Dhiraj Patel, Co-Founder and CEO, support@retainsure.com"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Activities relevant to the data transferred under these Clauses:" }),
                  " Provision of the Services to the Customer in accordance with the Agreement."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Signature and date:" }),
                  " Signature and date are set out in the order form."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Role (controller/processor):" }),
                  " Processor."
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", style: { color: "#022610" }, children: "B. DESCRIPTION OF TRANSFER" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Categories of data subjects whose personal data is transferred" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "Customer's authorized users of the Services, Customer's customer data synced via source integration that they have enabled on the RetainSure product" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Categories of personal data transferred" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "Name, Address, Date of Birth, Age, Education, Email, Gender, Image, Job, Language, Phone, Related person, Related URL, User ID, Username." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Sensitive data transferred (if applicable) and applied restrictions or safeguards" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "No sensitive data collected." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "The frequency of the transfer" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "Continuous basis" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Nature of the processing" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "Providing access to the platform, analytics, better offering and fulfilling services mentioned in the order form" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Purpose(s) of the data transfer and further processing" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "The purpose of the transfer is to facilitate the performance of the Services more fully described in the Agreement and accompanying order forms." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "The period for which the personal data will be retained" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "The period for which the Customer Personal Data will be retained is more fully described in the Agreement, Addendum, and accompanying order forms." })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "For transfers to (sub-) processors" }),
              /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "The subject matter, nature, and duration of the Processing more fully described in the Agreement, Addendum, and accompanying order forms." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", style: { color: "#022610" }, children: "C. COMPETENT SUPERVISORY AUTHORITY" }),
          /* @__PURE__ */ jsx("p", { className: "text-base mb-2", style: { color: "#022610", opacity: 0.8 }, children: "Data exporter is established in an EEA country." }),
          /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "The competent supervisory authority is as determined by application of Clause 13 of the EU SCCs." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", style: { color: "#022610" }, children: "ANNEX II" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", style: { color: "#022610" }, children: "TECHNICAL AND ORGANISATIONAL MEASURES INCLUDING TECHNICAL AND ORGANISATIONAL MEASURES TO ENSURE THE SECURITY OF THE DATA" }),
          /* @__PURE__ */ jsx("p", { className: "text-base mb-6", style: { color: "#022610", opacity: 0.8 }, children: "Description of the technical and organisational security measures implemented by RetainSure Technologies Private Limited as the data processor/data importer to ensure an appropriate level of security, taking into account the nature, scope, context, and purpose of the processing, and the risks for the rights and freedoms of natural persons." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h5", { className: "text-lg font-semibold mb-3", style: { color: "#022610" }, children: "Security" }),
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Security Management System." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Organization." }),
                  " RetainSure Technologies Private Limited designates qualified security personnel whose responsibilities include development, implementation, and ongoing maintenance of the Information Security Program."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Policies." }),
                  " Management reviews and supports all security related policies to ensure the security, availability, integrity and confidentiality of Customer Personal Data. These policies are updated at least once annually."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Assessments." }),
                  " RetainSure Technologies Private Limited engages a reputable independent third-party to perform risk assessments of all systems containing Customer Personal Data at least once annually."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Risk Treatment." }),
                  " RetainSure Technologies Private Limited maintains a formal and effective risk treatment program that includes penetration testing, vulnerability management and patch management to identify and protect against potential threats to the security, integrity or confidentiality of Customer Personal Data."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Vendor Management." }),
                  " RetainSure Technologies Private Limited maintains an effective vendor management program"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Incident Management." }),
                  " RetainSure Technologies Private Limited reviews security incidents regularly, including effective determination of root cause and corrective action."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Standards." }),
                  " RetainSure Technologies Private Limited operates an information security management system that complies with the requirements of SOC 2 Type 2"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Personnel Security." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsx("p", { children: "RetainSure Technologies Private Limited personnel are required to conduct themselves in a manner consistent with the company's guidelines regarding confidentiality, business ethics, appropriate usage, and professional standards. RetainSure Technologies Private Limited conducts reasonably appropriate background checks on any employees who will have access to client data under this Agreement, including in relation to employment history and criminal records, to the extent legally permissible and in accordance with applicable local labor law, customary practice and statutory regulations." }),
                /* @__PURE__ */ jsx("p", { children: "Personnel are required to execute a confidentiality agreement in writing at the time of hire and to protect Customer Personal Data at all times. Personnel must acknowledge receipt of, and compliance with, RetainSure Technologies Private Limited's confidentiality, privacy and security policies. Personnel are provided with privacy and security training on how to implement and comply with the Information Security Program. Personnel handling Customer Personal Data are required to complete additional requirements appropriate to their role (e.g., certifications). RetainSure Technologies Private Limited's personnel will not process Customer Personal Data without authorization." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Access Controls" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Access Management." }),
                  " RetainSure Technologies Private Limited maintains a formal access management process for the request, review, approval and provisioning of all personnel with access to Customer Personal Data to limit access to Customer Personal Data and systems storing, accessing or transmitting Customer Personal Data to properly authorized persons having a need for such access. Access reviews are conducted periodically to ensure that only those personnel with access to Customer Personal Data still require it."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Infrastructure Security Personnel." }),
                  " RetainSure Technologies Private Limited has, and maintains, a security policy for its personnel, and requires security training as part of the training package for its personnel. RetainSure Technologies Private Limited's infrastructure security personnel are responsible for the ongoing monitoring of RetainSure Technologies Private Limited's security infrastructure, the review of the Services, and for responding to security incidents."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Access Control and Privilege Management." }),
                  " RetainSure Technologies Private Limited's and Customer's administrators and end users must authenticate themselves via a Multi-Factor authentication system or via a single sign on system in order to use the Services"
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Internal Data Access Processes and Policies – Access Policy." }),
                  ` RetainSure Technologies Private Limited's internal data access processes and policies are designed to protect against unauthorized access, use, disclosure, alteration or destruction of Customer Personal Data. RetainSure Technologies Private Limited designs its systems to only allow authorized persons to access data they are authorized to access based on principles of "least privileged" and "need to know", and to prevent others who should not have access from obtaining access. RetainSure Technologies Private Limited requires the use of unique user IDs, strong passwords, two factor authentication and carefully monitored access lists to minimize the potential for unauthorized account use. The granting or modification of access rights is based on: the authorized personnel's job responsibilities; job duty requirements necessary to perform authorized tasks; a need to know basis; and must be in accordance with RetainSure Technologies Private Limited's internal data access policies and training. Approvals are managed by workflow tools that maintain audit records of all changes. Access to systems is logged to create an audit trail for accountability. Where passwords are employed for authentication (e.g., login to workstations), password policies follow industry standard practices. These standards include password complexity, password expiry, password lockout, restrictions on password reuse and re-prompt for password after a period of inactivity`
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Data Center and Network Security" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Data Centers." }) }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Infrastructure." }),
                  " RetainSure Technologies Private Limited has AWS as its data center."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Resiliency." }),
                  " RetainSure Technologies Private Limited conducts Backup Restoration Testing on regular basis to ensure resiliency."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Server Operating Systems." }),
                  " RetainSure Technologies Private Limited's servers are customized for the application environment and the servers have been hardened for the security of the Services. RetainSure Technologies Private Limited employs a code review process to increase the security of the code used to provide the Services and enhance the security products in production environments."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Disaster Recovery." }),
                  " RetainSure Technologies Private Limited backups data over multiple systems to help to protect against accidental destruction or loss. RetainSure Technologies Private Limited has designed and regularly plans and tests its disaster recovery programs."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Security Logs." }),
                  " RetainSure Technologies Private Limited's systems have logging enabled to their respective system log facility in order to support the security audits, and monitor and detect actual and attempted attacks on, or intrusions into, RetainSure Technologies Private Limited's systems."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Vulnerability Management." }),
                  " RetainSure Technologies Private Limited performs regular vulnerability scans on all infrastructure components of its production and development environment. Vulnerabilities are remediated on a risk basis, with Critical, High and Medium security patches for all components installed as soon as commercially possible."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Networks and Transmission." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", style: { color: "#022610", opacity: 0.8 }, children: [
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Data Transmission." }),
                  " Transmissions on production environment are transmitted via Internet standard protocols."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "External Attack Surface." }),
                  " AWS Security Group which is equivalent to virtual firewall is in place for Production environment on AWS."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Incident Response." }),
                  " RetainSure Technologies Private Limited maintains incident management policies and procedures, including detailed security incident escalation procedures. RetainSure Technologies Private Limited monitors a variety of communication channels for security incidents, and RetainSure Technologies Private Limited's security personnel will react promptly to suspected or known incidents, mitigate harmful effects of such security incidents, and document such security incidents and their outcomes."
                ] }),
                /* @__PURE__ */ jsxs("p", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Encryption Technologies." }),
                  " RetainSure Technologies Private Limited makes HTTPS encryption (also referred to as SSL or TLS) available for data in transit."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h6", { className: "font-semibold mb-2", style: { color: "#022610" }, children: "Data Storage, Isolation, Authentication, and Destruction." }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#022610", opacity: 0.8 }, children: "RetainSure Technologies Private Limited stores data in a multi-tenant environment on AWS servers. RetainSure Technologies Private Limited logically isolates the data of different customers. A central authentication system is used across all Services to increase uniform security of data. RetainSure Technologies Private Limited ensures secure disposal of Client Data through the use of a series of data destruction processes." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", style: { color: "#022610" }, children: "ANNEX III" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-4", style: { color: "#022610" }, children: "LIST OF SUB-PROCESSORS" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "The controller has authorised the use of the following sub-processors:" }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse border border-gray-300 rounded-lg", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-gray-50", children: [
              /* @__PURE__ */ jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", style: { color: "#022610" }, children: "Name of Sub-Processor" }),
              /* @__PURE__ */ jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", style: { color: "#022610" }, children: "Description of Processing" }),
              /* @__PURE__ */ jsx("th", { className: "border border-gray-300 px-4 py-3 text-left font-semibold", style: { color: "#022610" }, children: "Compliance Certificate" })
            ] }) }),
            /* @__PURE__ */ jsxs("tbody", { children: [
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Amazon Web Services" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Hosting the Production Environment" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Hubspot" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Storing prospect/customer data and communications tracking - CRM" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Open AI" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "AI use cases to provide output on the product" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Anthropic" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Claude Code for product building" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Google Gemini" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "AI use cases to provide output on the product" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "PostHog" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "For analytics and staged feature rollouts" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Fathom" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "For meeting recordings with prospects and customers" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Atlassian" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "For ticketing and task management for software development lifecycle" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Google Workspace" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Identity provider, documentation and analysis" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, ISO 27001, GDPR" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Tailscale" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Network traffic management" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2" })
              ] }),
              /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 transition-colors duration-200", children: [
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3 font-medium", style: { color: "#022610" }, children: "Google Cloud" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "Gmail Integration OAuth" }),
                /* @__PURE__ */ jsx("td", { className: "border border-gray-300 px-4 py-3", style: { color: "#022610", opacity: 0.8 }, children: "SOC 2 Type 2, GDPR, ISO 27001" })
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }) }) }) })
  ] });
}
const DemoAccessContext = createContext(void 0);
function DemoAccessProvider({ children }) {
  const checkAccess = () => {
    if (typeof window === "undefined") return false;
    const pendingEmail = localStorage.getItem("demo_pending_email");
    const verificationToken = localStorage.getItem("demo_verification_token");
    return !!(pendingEmail && verificationToken);
  };
  const [hasAccess, setHasAccess] = useState(() => checkAccess());
  const grantAccess = () => {
    setHasAccess(true);
  };
  return /* @__PURE__ */ jsx(DemoAccessContext.Provider, { value: { hasAccess, grantAccess, checkAccess }, children });
}
function useDemoAccess() {
  const context = useContext(DemoAccessContext);
  if (context === void 0) {
    throw new Error("useDemoAccess must be used within a DemoAccessProvider");
  }
  return context;
}
function EmailGateModal({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreeToUpdates, setAgreeToUpdates] = useState(false);
  const blockedDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"];
  const validateEmail = (email2) => {
    var _a2;
    if (!email2) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email2)) {
      return "Please enter a valid email address";
    }
    const domain = (_a2 = email2.split("@")[1]) == null ? void 0 : _a2.toLowerCase();
    if (blockedDomains.includes(domain)) {
      return `Please use a business email. ${domain} addresses are not allowed`;
    }
    return null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (!agreeToUpdates) {
      setError("Please agree to receive updates to continue");
      return;
    }
    setLoading(true);
    try {
      const checkResponse = await fetch(
        `${"https://xaernugnwaayxtdcpnol.supabase.co"}/rest/v1/demo_access_requests?email=eq.${email.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJudWdud2FheXh0ZGNwbm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTE1NDYsImV4cCI6MjA3OTYyNzU0Nn0.wjgkE7_DRXUJOtYizfyONLXsZIJj1CN2FFgypz5bf08",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJudWdud2FheXh0ZGNwbm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTE1NDYsImV4cCI6MjA3OTYyNzU0Nn0.wjgkE7_DRXUJOtYizfyONLXsZIJj1CN2FFgypz5bf08"}`
          }
        }
      );
      if (checkResponse.ok) {
        const existingRecords = await checkResponse.json();
        if (existingRecords && existingRecords.length > 0) {
          const existingRecord = existingRecords[0];
          localStorage.setItem("demo_pending_email", email.toLowerCase());
          localStorage.setItem("demo_verification_token", existingRecord.verification_token);
          setSubmitted(true);
          setLoading(false);
          setTimeout(() => {
            onSuccess();
          }, 2e3);
          return;
        }
      }
      const verificationToken = crypto.randomUUID();
      const response = await fetch(
        `${"https://xaernugnwaayxtdcpnol.supabase.co"}/rest/v1/demo_access_requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJudWdud2FheXh0ZGNwbm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTE1NDYsImV4cCI6MjA3OTYyNzU0Nn0.wjgkE7_DRXUJOtYizfyONLXsZIJj1CN2FFgypz5bf08",
            "Authorization": `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhZXJudWdud2FheXh0ZGNwbm9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTE1NDYsImV4cCI6MjA3OTYyNzU0Nn0.wjgkE7_DRXUJOtYizfyONLXsZIJj1CN2FFgypz5bf08"}`,
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            email: email.toLowerCase(),
            verification_token: verificationToken,
            verified: false
          })
        }
      );
      if (!response.ok) {
        setError("Failed to submit email. Please try again.");
        setLoading(false);
        return;
      }
      localStorage.setItem("demo_pending_email", email.toLowerCase());
      localStorage.setItem("demo_verification_token", verificationToken);
      setSubmitted(true);
      setLoading(false);
      setTimeout(() => {
        onSuccess();
      }, 2e3);
    } catch (err) {
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-10 h-10 text-white" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-3", style: { color: "#022610" }, children: "Access Granted!" }),
      /* @__PURE__ */ jsx("p", { className: "text-base", style: { color: "#022610", opacity: 0.8 }, children: "Thank you for submitting your email. You now have access to our interactive demos." })
    ] }) });
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Mail, { className: "w-6 h-6 text-white" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold", style: { color: "#022610" }, children: "One step away" })
    ] }) }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", style: { color: "#022610" }, children: "Business Email Address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            id: "email",
            value: email,
            onChange: (e) => {
              setEmail(e.target.value);
              setError("");
            },
            placeholder: "you@company.com",
            className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50",
            style: {
              borderColor: error ? "#ef4444" : "#d1d5db",
              focusRing: "#039143"
            },
            disabled: loading
          }
        ),
        error && /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2 mt-2", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-red-500", children: error })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-xs", style: { color: "#022610", opacity: 0.7 }, children: [
        /* @__PURE__ */ jsx("strong", { children: "Note:" }),
        " Please provide your business email to access our interactive demos. We collect this information to better understand our audience. Free email providers (Gmail, Yahoo, Outlook) are not accepted."
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            id: "agree-updates",
            checked: agreeToUpdates,
            onChange: (e) => {
              setAgreeToUpdates(e.target.checked);
              if (error === "Please agree to receive updates to continue") {
                setError("");
              }
            },
            className: "mt-1 w-4 h-4 rounded border-gray-300 focus:ring-2 focus:ring-opacity-50",
            style: { accentColor: "#039143" },
            disabled: loading
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "agree-updates", className: "text-xs", style: { color: "#022610", opacity: 0.7 }, children: "By continuing, you agree to receive updates about RetainSure. You can unsubscribe at any time." })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
          style: { backgroundColor: "#039143" },
          children: loading ? "Submitting..." : "Continue to Demos"
        }
      )
    ] })
  ] }) });
}
function InteractiveDemo() {
  const { hasAccess, grantAccess } = useDemoAccess();
  const [showGate, setShowGate] = useState(true);
  useEffect(() => {
    if (hasAccess) {
      setShowGate(false);
    }
  }, [hasAccess]);
  const handleAccessGranted = () => {
    grantAccess();
    setShowGate(false);
  };
  const agents = [
    {
      title: "Co-pilot Agent",
      description: "Empower your team with AI-driven recommendations and workflows",
      icon: Bot,
      id: "copilot"
    },
    {
      title: "Meeting Agent",
      description: "Transform customer conversations into actionable insights automatically",
      icon: Users
    },
    {
      title: "Product Adoption Agent",
      description: "Accelerate user onboarding and feature adoption with intelligent guidance",
      icon: Zap
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Interactive Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Interactive demo of RetainSure's AI-powered customer success platform. Experience churn prediction, upsell identification, and AI-powered workflows." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/interactive-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/interactive-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Interactive Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Interactive demo of RetainSure's AI-powered customer success platform. Experience churn prediction, upsell identification, and AI-powered workflows." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/interactive-demo" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Interactive Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Interactive demo of RetainSure's AI-powered customer success platform. Experience churn prediction, upsell identification, and AI-powered workflows." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" })
    ] }),
    showGate && /* @__PURE__ */ jsx(EmailGateModal, { onSuccess: handleAccessGranted }),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen bg-gradient-to-br from-white to-green-50 flex flex-col items-center justify-center p-4 pt-12 pb-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold", style: { color: "#022610" }, children: "Welcome to the future of Customer Success" }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: agents.map((agent) => {
        const Icon = agent.icon;
        const button = /* @__PURE__ */ jsx(
          "button",
          {
            className: "mt-auto text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200",
            style: { backgroundColor: "#039143" },
            children: "Explore Agent"
          }
        );
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-xl hover:scale-105",
            children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 rounded-full mb-6", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Icon, { className: "w-10 h-10 text-white" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-3", style: { color: "#022610" }, children: agent.title }),
              /* @__PURE__ */ jsx("p", { className: "mb-6 flex-grow", style: { color: "#022610", opacity: 0.8 }, children: agent.description }),
              agent.id === "copilot" ? /* @__PURE__ */ jsx(Link, { to: "/interactive-demo/copilot-agent", children: button }) : agent.title === "Product Adoption Agent" ? /* @__PURE__ */ jsx(Link, { to: "/interactive-demo/product-adoption-agent", children: button }) : agent.title === "Meeting Agent" ? /* @__PURE__ */ jsx(Link, { to: "/interactive-demo/meeting-agent", children: button }) : button
            ]
          },
          agent.id
        );
      }) })
    ] }) })
  ] });
}
function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    // Always true, can't be disabled
    analytics: false,
    marketing: false
  });
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowCustomize(false);
  };
  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowCustomize(false);
  };
  const handleCustomize = () => {
    setShowCustomize(true);
  };
  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setShowBanner(false);
    setShowCustomize(false);
  };
  const handlePreferenceChange = (type) => {
    if (type === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [type]: !prev[type]
    }));
  };
  if (!showBanner) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 right-4 z-50 max-w-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform transition-all duration-300 ease-out", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Cookie, { className: "w-4 h-4 text-white" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", style: { color: "#022610" }, children: "Cookie Settings" }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed", style: { color: "#022610", opacity: 0.8 }, children: [
            "We use cookies to enhance your experience, analyze site traffic and deliver personalized content. Read our",
            " ",
            /* @__PURE__ */ jsx(
              Link,
              {
                to: { pathname: "/privacy-policy", hash: "#cookies" },
                className: "underline hover:opacity-70 transition-opacity",
                style: { color: "#039143" },
                children: "Cookie Policy"
              }
            ),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleAcceptAll,
            className: "w-full text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200",
            style: { backgroundColor: "#039143" },
            children: "Accept All"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleCustomize,
              className: "flex-1 border border-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200",
              style: { color: "#022610" },
              children: "Customize"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleRejectAll,
              className: "flex-1 border border-gray-300 px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors duration-200",
              style: { color: "#022610" },
              children: "Reject All"
            }
          )
        ] })
      ] })
    ] }) }),
    showCustomize && /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 z-60 flex items-center justify-center p-4", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300",
          onClick: () => setShowCustomize(false)
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 w-full max-w-md transform transition-all duration-300 scale-100", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full flex items-center justify-center", style: { backgroundColor: "#039143" }, children: /* @__PURE__ */ jsx(Settings$1, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold", style: { color: "#022610" }, children: "Cookie Preferences" })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowCustomize(false),
              className: "w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200",
              children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4", style: { color: "#022610" } })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 bg-gray-50 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", style: { color: "#022610" }, children: "Necessary" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#022610", opacity: 0.7 }, children: "Essential for the website to function properly. Cannot be disabled." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-white rounded-full" }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 border border-gray-200 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", style: { color: "#022610" }, children: "Analytics" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#022610", opacity: 0.7 }, children: "Help us understand how visitors interact with our website." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handlePreferenceChange("analytics"),
                className: `w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${preferences.analytics ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}`,
                children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-white rounded-full" })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between p-4 border border-gray-200 rounded-xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-1", style: { color: "#022610" }, children: "Marketing" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#022610", opacity: 0.7 }, children: "Used to deliver personalized advertisements and content." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-4", children: /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handlePreferenceChange("marketing"),
                className: `w-12 h-6 rounded-full flex items-center transition-colors duration-200 px-1 ${preferences.marketing ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"}`,
                children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-white rounded-full" })
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setShowCustomize(false),
              className: "flex-1 border border-gray-300 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200",
              style: { color: "#022610" },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleSavePreferences,
              className: "flex-1 text-white px-4 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200",
              style: { backgroundColor: "#039143" },
              children: "Save Preferences"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSectionNavigation = (sectionId) => {
    const scroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
    if (location.pathname === "/") {
      scroll();
    } else {
      navigate("/");
      setTimeout(scroll, 100);
    }
  };
  return /* @__PURE__ */ jsx("nav", { className: "bg-white border-b border-gray-100 sticky top-0 z-50", role: "navigation", "aria-label": "Main navigation", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-3 sm:py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200",
        "aria-label": "RetainSure homepage",
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/RetainSureFullLogo.png",
            alt: "RetainSure",
            className: "h-5 sm:h-6 w-auto"
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-4 lg:space-x-8", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/features",
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "View features",
          children: "Features"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/case-studies",
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "Read case studies",
          children: "Case Studies"
        }
      ),
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/pricing",
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "View pricing",
          children: "Pricing"
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/free-customer-success-ai-tools",
          className: "relative font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "Free AI tools for customer success",
          children: [
            "Free AI Tools",
            /* @__PURE__ */ jsx("span", { className: "absolute -top-2.5 -right-8 bg-emerald-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none nav-new-badge", children: "new" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "https://trust.retainsure.com",
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "Learn about our security measures",
          children: "Security"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => handleSectionNavigation("faq"),
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "View frequently asked questions",
          children: "FAQ"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "https://app.retainsure.com",
          className: "border border-gray-300 px-4 lg:px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 cursor-pointer text-sm lg:text-base",
          style: { color: "#022610" },
          "aria-label": "Login to RetainSure app",
          children: "Login"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => window.location.href = "/book-a-demo",
          className: "text-white px-4 lg:px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200 cursor-pointer text-sm lg:text-base",
          style: { backgroundColor: "#039143" },
          "aria-label": "Get started with RetainSure",
          children: "Get Started"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden" })
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-white border-t border-gray-200", itemScope: true, itemType: "https://schema.org/Organization", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 py-8 sm:py-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-3 sm:space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-1 sm:space-y-2", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/RetainSureFullLogo.png",
            alt: "RetainSure",
            className: "h-6 sm:h-8 w-auto mb-2 sm:mb-3",
            itemProp: "logo"
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "text-base sm:text-lg font-semibold", style: { color: "#022610" }, itemProp: "name", children: "RetainSure Technologies Private Limited" }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm space-y-1", style: { color: "#022610", opacity: 0.7 }, itemProp: "address", itemScope: true, itemType: "https://schema.org/PostalAddress", children: [
          /* @__PURE__ */ jsx("p", { itemProp: "streetAddress", children: "#17, 2nd floor, 7th Main Road, ll Stage Indiranagar" }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("span", { itemProp: "addressLocality", children: "Bangalore" }),
            " - ",
            /* @__PURE__ */ jsx("span", { itemProp: "postalCode", children: "560038" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8", "aria-label": "Legal links", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/book-a-demo",
            className: "text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#022610" },
            children: "Book a Demo"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/privacy-policy",
            className: "text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#022610" },
            children: "Privacy Policy"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/terms-of-service",
            className: "text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#022610" },
            children: "Terms of Service"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/data-processing-agreement",
            className: "text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#022610" },
            children: "Data Processing Agreement"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact-us",
            className: "text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#022610" },
            children: "Contact Us"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { className: "text-sm", style: { color: "#022610", opacity: 0.6 }, children: "© 2025 RetainSure Technologies Private Limited. All rights reserved." }) }) })
  ] }) });
}
function ProtectedDemoRoute({ children }) {
  const { hasAccess } = useDemoAccess();
  if (!hasAccess) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/interactive-demo", replace: true });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
}
const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState("richard.hendricks@piedpiper.com");
  const [password, setPassword] = useState("password123");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1e3);
  };
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md w-full space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900", children: "WELCOME TO" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-center text-sm text-gray-600", children: "AI customer success manager for SaaS" })
    ] }),
    /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-6", onSubmit: handleLogin, children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-md shadow-sm -space-y-px", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email-address", className: "sr-only", children: "Email address" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "email-address",
              name: "email",
              type: "email",
              autoComplete: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm font-sans",
              style: { "--tw-ring-color": "#339C57", borderColor: "focus:#339C57" },
              onFocus: (e) => e.target.style.borderColor = "#339C57",
              onBlur: (e) => e.target.style.borderColor = "#d1d5db",
              placeholder: "Enter your email"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "sr-only", children: "Password" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              required: true,
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm font-sans",
              onFocus: (e) => e.target.style.borderColor = "#339C57",
              onBlur: (e) => e.target.style.borderColor = "#d1d5db",
              placeholder: "Enter your password"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "remember-me",
              name: "remember-me",
              type: "checkbox",
              className: "h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            }
          ),
          /* @__PURE__ */ jsx("label", { htmlFor: "remember-me", className: "ml-2 block text-sm text-gray-900", children: "Remember me" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-sm", children: /* @__PURE__ */ jsx("a", { href: "#", className: "font-medium text-green-600 hover:text-green-500", children: "Forgot your password?" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "submit",
          className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
          style: { backgroundColor: "#339C57" },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#2d8a4d",
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#339C57",
          disabled: isLoading,
          children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-0 inset-y-0 flex items-center pl-3", children: /* @__PURE__ */ jsx(LogIn, { className: "h-5 w-5 text-green-500 group-hover:text-green-400", "aria-hidden": "true" }) }),
            isLoading ? "Signing in..." : "Sign in"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 text-center text-sm text-gray-600", children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Demo Credentials" }),
      /* @__PURE__ */ jsx("p", { children: "Use the pre-filled credentials above to access the demo" })
    ] })
  ] }) });
};
const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");
  const messagesEndRef = useRef(null);
  const initializedRef = useRef(false);
  const bugsFeatureUpdates = [
    { id: "bf1", title: "Jira ticket updated, inform customer about the feature release", type: "feature", description: "New Advanced Analytics Dashboard feature has been released" },
    { id: "bf2", title: "Jira ticket updated, inform customer about the bug resolution", type: "bug", description: "Performance issue in data export functionality has been resolved" }
  ];
  const workflowOptions = [
    { id: "1", title: "These 5 customers with highest churn risk", cta: "Help me understand why?", icon: /* @__PURE__ */ jsx(TrendingUp, { size: 20, className: "text-red-500" }), workflow: "churn-analysis" },
    { id: "2", title: "These 2 customers are in upsell potential", cta: "Help me understand why?", icon: /* @__PURE__ */ jsx(DollarSign, { size: 20, className: "text-green-500" }), workflow: "upsell-analysis" },
    { id: "3", title: "Meeting with Delta Corp", cta: "Prepare me for the meeting", icon: /* @__PURE__ */ jsx(Calendar, { size: 20, className: "text-blue-500" }), workflow: "meeting-prep" },
    { id: "4", title: "5 pending tasks from yesterday", cta: "Help me with the tasks", icon: /* @__PURE__ */ jsx(CheckSquare, { size: 20, className: "text-yellow-500" }), workflow: "task-management" },
    { id: "5", title: "Bugs/Features updates", cta: "Show me the updates", icon: /* @__PURE__ */ jsx(AlertTriangle, { size: 20, className: "text-purple-500" }), workflow: "bugs-features-updates" }
  ];
  const churnCustomers = [
    { id: "c1", name: "Sarah Johnson", company: "TechFlow Industries", riskLevel: "high", reason: "45% decrease in platform usage, no response to support tickets", value: "$45K ARR", type: "churn", details: "Contract renewal due in 2 weeks. Key stakeholder seems disengaged." },
    { id: "c2", name: "Mike Chen", company: "Marketing Plus LLC", riskLevel: "high", reason: "Downgraded plan, key contact left company", value: "$32K ARR", type: "churn", details: "New decision maker not familiar with our platform value." },
    { id: "c3", name: "Lisa Rodriguez", company: "Global Dynamics", riskLevel: "medium", reason: "Multiple billing disputes, competitive inquiry", value: "$28K ARR", type: "churn", details: "Price sensitivity and exploring alternatives." },
    { id: "c4", name: "David Park", company: "Innovation Corp", riskLevel: "medium", reason: "Integration issues, onboarding frustration", value: "$22K ARR", type: "churn", details: "Technical challenges preventing full adoption." },
    { id: "c5", name: "Emma Wilson", company: "Future Systems", riskLevel: "medium", reason: "Budget constraints, delayed payments", value: "$18K ARR", type: "churn", details: "Financial pressures affecting renewal likelihood." }
  ];
  const upsellCustomers = [
    { id: "u1", name: "Alex Thompson", company: "DataFlow Solutions", riskLevel: "high", reason: "Usage at 180% of plan limits, team growth from 5 to 15 users", value: "$45K potential", type: "upsell", details: "High engagement with premium features during trial period." },
    { id: "u2", name: "Rachel Kim", company: "ScaleUp Ventures", riskLevel: "high", reason: "API rate limit requests, integrating with 5+ new tools", value: "$28K potential", type: "upsell", details: "Asked about white-label options and custom enterprise features." }
  ];
  const pendingTasks = [
    { id: "t1", title: "Follow up with TechCorp on contract renewal", priority: "high", dueDate: "Overdue by 1 day", description: "TechCorp ($120K ARR) contract expires in 10 days. Last contact was 5 days ago with no response to renewal proposal.", context: "Key stakeholder Sarah Mitchell has been unresponsive. Contract includes auto-renewal clause but they've expressed budget concerns.", timeNeeded: "45 minutes", dependencies: "Pricing approval from sales team for 15% discount offer" },
    { id: "t2", title: "Complete Q1 customer health score analysis", priority: "high", dueDate: "Due today", description: "Analyze health scores for 150+ accounts to identify at-risk customers and expansion opportunities for Q1 planning.", context: "Need to review usage data, support tickets, and engagement metrics. Results will drive Q1 outreach strategy.", timeNeeded: "2 hours", dependencies: "Data export from analytics team (received yesterday)" },
    { id: "t3", title: "Prepare QBR presentation for GlobalTech", priority: "medium", dueDate: "Due tomorrow", description: "Create comprehensive quarterly business review for GlobalTech ($85K ARR) covering ROI, usage metrics, and roadmap alignment.", context: "Meeting scheduled for Thursday 2 PM. Need to highlight 40% efficiency gains and discuss expansion into European markets.", timeNeeded: "1.5 hours", dependencies: "Usage reports from product team" },
    { id: "t4", title: "Onboard new customer: StartupXYZ", priority: "medium", dueDate: "Due Friday", description: "Complete onboarding process for StartupXYZ ($25K ARR) including setup, training, and success metrics definition.", context: "New customer signed last week. Team of 8 users needs training on advanced features. High growth potential.", timeNeeded: "3 hours total", dependencies: "Technical setup completion from implementation team" },
    { id: "t5", title: "Update customer success playbook", priority: "low", dueDate: "Due next week", description: "Revise onboarding and renewal playbooks based on Q4 learnings and new product features.", context: "Incorporate feedback from recent customer interviews and align with new product capabilities launched in December.", timeNeeded: "2 hours", dependencies: "Product update documentation from product team" }
  ];
  const addBugsFeaturesMessage = () => {
    const bugsFeaturesMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: "Here are the latest Jira ticket updates that need customer communication:",
      timestamp: /* @__PURE__ */ new Date(),
      isBugsFeatures: true,
      bugsFeatures: bugsFeatureUpdates
    };
    setMessages((prev) => [...prev, bugsFeaturesMessage]);
  };
  const addEmailDraftMessage = (updateType) => {
    const emailDraft = generateEmailDraft(updateType);
    const draftMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: `Here's the email draft for the ${updateType === "feature" ? "feature release" : "bug resolution"} update:`,
      timestamp: /* @__PURE__ */ new Date(),
      isEmailDraft: true,
      emailDraft
    };
    setMessages((prev) => [...prev, draftMessage]);
  };
  const generateEmailDraft = (type) => {
    if (type === "feature") {
      return {
        subject: "Exciting New Feature: Advanced Analytics Dashboard Now Available",
        content: `Hi there,

I'm excited to share some great news! We've just released a new Advanced Analytics Dashboard feature that I think will be incredibly valuable for your team.

What's New:
• Real-time data visualization with customizable charts
• Advanced filtering and segmentation capabilities
• Automated report scheduling and sharing
• Enhanced export options with multiple formats
• Mobile-responsive design for on-the-go access

This feature was developed based on feedback from customers like you who requested more powerful analytics capabilities. It's designed to help you gain deeper insights into your data and make more informed decisions.

Key Benefits for Your Team:
• Save 3-4 hours per week on manual report generation
• Get real-time insights instead of waiting for daily reports
• Create custom dashboards tailored to your specific needs
• Share insights easily with stakeholders

The feature is now live in your account and ready to use. I'd love to schedule a 15-minute demo to show you how to get the most out of it.

Would you be available for a quick call this week? I can walk you through the new capabilities and answer any questions you might have.

Best regards,
Richard
Customer Success Manager`,
        type: "feature"
      };
    } else {
      return {
        subject: "Issue Resolved: Data Export Performance Improvement",
        content: `Hi there,

I wanted to personally reach out to let you know that we've successfully resolved the performance issue you reported with the data export functionality.

Issue Summary:
• Problem: Slow export times for large datasets (>10,000 records)
• Impact: Export processes were taking 5-10 minutes instead of the usual 30-60 seconds
• Root Cause: Database query optimization needed for large data sets

Resolution Details:
• Our engineering team implemented optimized database queries
• Added background processing for large exports
• Improved memory management during export operations
• Enhanced progress indicators for better user experience

Results:
• Export times reduced by 85% for large datasets
• More reliable processing with fewer timeouts
• Better user feedback during the export process
• Improved overall system performance

The fix has been deployed and is now live in your account. You should notice significantly faster export times immediately.

I sincerely apologize for any inconvenience this issue may have caused your team. We take these matters seriously and have implemented additional monitoring to prevent similar issues in the future.

Please don't hesitate to reach out if you experience any further issues or have questions about the improvements.

Thank you for your patience and continued partnership.

Best regards,
Richard
Customer Success Manager`,
        type: "bug"
      };
    }
  };
  const scrollToBottom = () => {
    var _a2;
    (_a2 = messagesEndRef.current) == null ? void 0 : _a2.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (!initializedRef.current) {
      initializedRef.current = true;
      setTimeout(() => {
        addAIMessage("Good Morning Richard, Let's make your day super productive today");
      }, 500);
      setTimeout(() => {
        addOptionsMessage();
      }, 1500);
    }
  }, []);
  const addAIMessage = (content) => {
    const newMessage = {
      id: Date.now().toString(),
      type: "ai",
      content,
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, newMessage]);
  };
  const addOptionsMessage = () => {
    const optionsMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: "Here are a few things you need to focus on for the day:",
      timestamp: /* @__PURE__ */ new Date(),
      isOptions: true,
      options: workflowOptions
    };
    setMessages((prev) => [...prev, optionsMessage]);
  };
  const addCustomerCardsMessage = (customers, type) => {
    const cardsMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: type === "churn" ? "Here are the 5 customers with highest churn risk based on our AI analysis:" : "Here are the 2 customers with highest upsell potential:",
      timestamp: /* @__PURE__ */ new Date(),
      isCustomerCards: true,
      customerCards: customers
    };
    setMessages((prev) => [...prev, cardsMessage]);
  };
  const addDetailedPlanMessage = (customer) => {
    const plan = generateDetailedPlan(customer);
    const planMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: `Here's a comprehensive ${customer.type === "churn" ? "churn mitigation" : "upsell"} plan for ${customer.company}:`,
      timestamp: /* @__PURE__ */ new Date(),
      isDetailedPlan: true,
      detailedPlan: plan
    };
    setMessages((prev) => [...prev, planMessage]);
  };
  const addMeetingPrepMessage = () => {
    const meetingPrep = {
      meetingDetails: `**Meeting Details:**
• Date: Today, 2:00 PM EST
• Duration: 60 minutes
• Attendees: Sarah Chen (CTO), Mike Rodriguez (VP Engineering), Lisa Wang (Product Manager)
• Type: Quarterly Business Review + Contract Renewal Discussion`,
      keyAccountDetails: `• Client since: March 2022
• Current Plan: Enterprise ($25K/month)
• Contract Value: $300K annually
• Contract Expires: February 28, 2025
• Primary Contact: Sarah Chen (CTO)
• Decision Makers: Sarah Chen, Mike Rodriguez, Lisa Wang
• Team Size: 45 active users
• Industry: Technology/Software Development
• Company Size: 200+ employees`,
      productUsage: {
        headers: ["Metric", "Current Month", "Previous Month", "Trend"],
        rows: [
          ["Active Users", "45", "42", "↗️ +7%"],
          ["API Calls", "2.1M", "1.8M", "↗️ +17%"],
          ["Storage Used", "850 GB", "780 GB", "↗️ +9%"],
          ["Feature Adoption", "78%", "65%", "↗️ +13%"],
          ["Platform Uptime", "99.9%", "99.8%", "↗️ +0.1%"],
          ["Resource Utilization", "95%", "87%", "↗️ +8%"]
        ]
      },
      supportEngagement: `**Last 30 Days Summary:**
• Total Tickets: 8 tickets
• Resolved: 7 tickets (87.5% resolution rate)
• Pending: 1 ticket (low priority)
• Average Response Time: 2.3 hours
• Average Resolution Time: 18 hours

**Sentiment Analysis:**
• Positive: 5 tickets (62.5%) - Feature requests and general inquiries
• Neutral: 2 tickets (25%) - Technical configuration questions
• Negative: 1 ticket (12.5%) - Integration complexity concern

**Key Issues:**
• Successfully resolved platform migration issues
• Provided additional training for new DevOps features
• One ongoing integration challenge with legacy system`,
      csEngagement: `**Last 30 Days Summary:**
• Total Emails: 12 emails exchanged
• Meetings: 3 meetings (2 scheduled, 1 ad-hoc)
• Response Rate: 100% (highly engaged)
• Average Response Time: 4.2 hours

**Meeting Summary:**
• Weekly check-in (Jan 15): Discussed Q1 goals and feature roadmap
• Technical review (Jan 22): Platform migration success celebration
• Ad-hoc call (Jan 28): Budget planning for Q2 expansion

**Email Themes:**
• Contract renewal discussions (4 emails)
• Feature requests and roadmap alignment (3 emails)
• Team expansion planning (3 emails)
• General updates and success metrics (2 emails)

**Engagement Level:** High - Proactive communication, quick responses, strategic discussions`
    };
    const prepMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: "Here's your comprehensive meeting preparation for Delta Corp:",
      timestamp: /* @__PURE__ */ new Date(),
      isMeetingPrep: true,
      meetingPrep
    };
    setMessages((prev) => [...prev, prepMessage]);
  };
  const addTaskListMessage = () => {
    const taskMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: "Here are your 5 pending tasks from yesterday, organized by priority:",
      timestamp: /* @__PURE__ */ new Date(),
      isTaskList: true,
      taskList: pendingTasks
    };
    setMessages((prev) => [...prev, taskMessage]);
  };
  const addTaskDetailMessage = (task) => {
    const taskDetailMessage = {
      id: Date.now().toString(),
      type: "ai",
      content: `Here are the details for: ${task.title}`,
      timestamp: /* @__PURE__ */ new Date(),
      isTaskDetail: true,
      taskDetail: { task, expanded: true }
    };
    setMessages((prev) => [...prev, taskDetailMessage]);
  };
  const handleMeetingPrepared = () => {
    const userMessage = { id: Date.now().toString(), type: "user", content: "I'm prepared", timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => {
      addAIMessage("Great! You're all set for the Delta Corp meeting. Let's continue with your other priorities for today.");
      setTimeout(() => addOptionsMessage(), 1e3);
    }, 1500);
  };
  const handleTaskClick = (task) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: `Show details for: ${task.title}`, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => addTaskDetailMessage(task), 1e3);
  };
  const handleTaskAction = (action, taskTitle) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: action, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => {
      let responseMessage = "";
      switch (action) {
        case "Done":
          responseMessage = `✅ Great! I've marked "${taskTitle}" as completed. Well done!`;
          break;
        case "Change due date to tomorrow":
          responseMessage = `📅 I've updated the due date for "${taskTitle}" to tomorrow. I'll remind you again.`;
          break;
        case "Not relevant anymore":
          responseMessage = `🗑️ I've removed "${taskTitle}" from your task list as it's no longer relevant.`;
          break;
      }
      addAIMessage(`${responseMessage}

Let's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1e3);
    }, 1500);
  };
  const handleBugFeatureClick = (update) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: update.title, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => addEmailDraftMessage(update.type), 1e3);
  };
  const handleSendUpdateEmail = (emailType) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: "Send email", timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => {
      const updateTypeText = emailType === "feature" ? "feature release" : "bug resolution";
      addAIMessage(`✅ Email sent successfully for the ${updateTypeText} update!

The customer has been notified and I've added a follow-up reminder to your calendar. Let's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1e3);
    }, 1500);
  };
  const handleSendEmail = (customerName) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: `Send email to ${customerName}`, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => {
      addAIMessage(`✅ Email sent successfully to ${customerName}!

The email has been delivered and I've added a follow-up reminder to your calendar. Let's continue with your other priorities for today.`);
      setTimeout(() => addOptionsMessage(), 1e3);
    }, 1500);
  };
  const generateDetailedPlan = (customer) => {
    if (customer.type === "churn") {
      return {
        customerName: customer.company,
        type: "churn",
        plan: `**Churn Mitigation Strategy for ${customer.company}**

**Immediate Actions (Next 48 hours):**
• Schedule emergency call with ${customer.name}
• Prepare retention offer with 20% discount
• Escalate technical issues to engineering team
• Assign dedicated success manager

**Short-term Plan (1-2 weeks):**
• Conduct comprehensive health check
• Provide additional training sessions
• Implement custom integration support
• Create success metrics dashboard

**Long-term Strategy (1-3 months):**
• Quarterly business reviews
• Executive relationship building
• Feature roadmap alignment
• Success story documentation`,
        email: `Subject: Urgent: Let's discuss your success with our platform

Hi ${customer.name},

I hope this email finds you well. I've been reviewing your account and noticed some changes in platform usage that I'd like to discuss with you.

As your dedicated customer success partner, I want to ensure you're getting maximum value from our platform. I'd love to schedule a brief 30-minute call this week to:

• Understand any challenges you might be facing
• Discuss how we can better support your team's goals
• Share some new features that could benefit your workflow
• Explore ways to optimize your current setup

Would Thursday at 2 PM or Friday at 10 AM work for you? I'm also happy to work around your schedule.

Looking forward to reconnecting and ensuring your continued success.

Best regards,
Richard
Customer Success Manager`,
        tasks: [
          "Schedule call with Sarah Johnson within 24 hours",
          "Prepare retention proposal with pricing options",
          "Coordinate with engineering team on technical issues",
          "Create custom onboarding plan",
          "Set up weekly check-in meetings",
          "Document all interactions in CRM",
          "Prepare executive summary for leadership team"
        ]
      };
    } else {
      return {
        customerName: customer.company,
        type: "upsell",
        plan: `**Upsell Strategy for ${customer.company}**

**Opportunity Assessment:**
• Current usage exceeds plan limits by 80%
• Team growth indicates scaling needs
• High engagement with premium features
• Budget cycle aligns with Q1 planning

**Upsell Approach:**
• Position as growth enablement, not cost increase
• Demonstrate ROI with current usage metrics
• Offer implementation support and training
• Create custom package with volume discounts

**Value Proposition:**
• Unlimited API calls and integrations
• Priority support and dedicated success manager
• Advanced analytics and reporting
• Custom branding and white-label options`,
        email: `Subject: Exciting growth opportunity for ${customer.company}

Hi ${customer.name},

Congratulations on the incredible growth I've been seeing in your account! Your team's usage has increased by 180% over the past quarter, which is a fantastic indicator of the value you're getting from our platform.

I wanted to reach out because I believe we have an exciting opportunity to support your continued growth even better. Based on your current usage patterns and team expansion, I'd love to discuss how our Enterprise plan could:

• Eliminate the API rate limits you've been hitting
• Provide the advanced integrations your team has been requesting
• Offer the white-label capabilities you inquired about
• Include priority support for your growing team

I've prepared a custom proposal that I think you'll find compelling, including some special pricing for early adopters like yourself.

Would you be available for a 30-minute call this week to discuss how we can support your next phase of growth?

Best regards,
Richard
Customer Success Manager`,
        tasks: [
          "Prepare custom Enterprise proposal with ROI analysis",
          "Schedule expansion conversation within 3 days",
          "Coordinate with sales team on pricing approval",
          "Create implementation timeline and support plan",
          "Gather usage analytics and growth metrics",
          "Prepare competitive analysis and differentiation",
          "Set up executive sponsor introduction"
        ]
      };
    }
  };
  const simulateTyping = (callback, delay = 2e3) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };
  const handleOptionClick = (option) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: option.cta, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => handleWorkflowResponse(option.workflow));
  };
  const handleCustomerCardClick = (customer) => {
    const userMessage = { id: Date.now().toString(), type: "user", content: `Create ${customer.type === "churn" ? "churn mitigation" : "upsell"} plan and draft email for ${customer.company}`, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    simulateTyping(() => addDetailedPlanMessage(customer), 1500);
  };
  const handleWorkflowResponse = (workflow) => {
    switch (workflow) {
      case "churn-analysis":
        addCustomerCardsMessage(churnCustomers, "churn");
        break;
      case "upsell-analysis":
        addCustomerCardsMessage(upsellCustomers, "upsell");
        break;
      case "meeting-prep":
        addMeetingPrepMessage();
        break;
      case "task-management":
        addTaskListMessage();
        break;
      case "bugs-features-updates":
        addBugsFeaturesMessage();
        break;
      default:
        addAIMessage("I'm here to help you with that. What specific aspect would you like to focus on?");
    }
  };
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    const userMessage = { id: Date.now().toString(), type: "user", content: userInput, timestamp: /* @__PURE__ */ new Date() };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput("");
    simulateTyping(() => {
      addAIMessage(`I've received your message: "${currentInput}". How can I assist further?`);
      setTimeout(() => addOptionsMessage(), 1500);
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-screen bg-gradient-to-br from-slate-50 to-blue-50", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-white border-b border-gray-200 px-6 py-4 shadow-sm font-sans", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/RetainSureIcon.png",
          alt: "RetainSure AI",
          className: "w-10 h-10 rounded-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold text-gray-800 font-sans", children: "RetainAI" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 font-sans", children: "Your AI customer success manager" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-4", children: [
      messages.map((message) => /* @__PURE__ */ jsx("div", { className: "animate-fade-in", children: message.type === "ai" ? /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/RetainSureIcon.png",
            alt: "RetainSure AI",
            className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100 max-w-4xl font-sans", children: [
            /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-gray-800 font-medium leading-relaxed font-sans", children: message.content }),
            message.isOptions && message.options && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: message.options.map((option) => /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleOptionClick(option),
                className: "w-full text-left p-4 bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl border border-green-200 hover:border-green-300 transition-all duration-200 group",
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-green-600 group-hover:text-green-700 mt-1", style: { color: "#039143" }, children: option.icon }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-800 mb-1 font-sans", children: option.title }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium group-hover:text-green-700 font-sans", style: { color: "#039143" }, children: [
                      option.cta,
                      " →"
                    ] })
                  ] })
                ] })
              },
              option.id
            )) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-400 mt-2 ml-1 font-sans", children: message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }),
          message.isCustomerCards && message.customerCards && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: message.customerCards.map((customer) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleCustomerCardClick(customer),
              className: "w-full text-left p-4 bg-white border border-gray-200 hover:border-green-300 rounded-xl transition-all duration-200 group hover:shadow-md",
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-red-500 mt-1", children: customer.type === "churn" ? /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(DollarSign, { className: "w-5 h-5 text-green-600" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-800 font-sans", children: customer.company }),
                    /* @__PURE__ */ jsxs("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${customer.riskLevel === "high" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"} font-sans`, children: [
                      customer.riskLevel,
                      " ",
                      customer.type === "churn" ? "risk" : "potential"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2 font-sans", children: customer.reason }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700 font-sans", children: customer.value }),
                    /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-green-600 group-hover:text-green-700 font-sans", children: [
                      "Create ",
                      customer.type === "churn" ? "mitigation" : "upsell",
                      " plan →"
                    ] })
                  ] })
                ] })
              ] })
            },
            customer.id
          )) }),
          message.isDetailedPlan && message.detailedPlan && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 font-sans", children: message.detailedPlan.type === "churn" ? "Churn Mitigation Plan" : "Upsell Strategy" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-blue-700 leading-relaxed font-sans", children: message.detailedPlan.plan })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-green-800 font-sans", children: "Draft Email" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-green-700 leading-relaxed font-sans bg-white p-3 rounded border", children: message.detailedPlan.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-purple-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-purple-800 font-sans", children: "Action Items" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: message.detailedPlan.tasks.map((task, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-purple-700 font-sans", children: task })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleSendEmail(message.detailedPlan.customerName),
                className: "px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans",
                children: [
                  /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                  "Send Email"
                ]
              }
            ) })
          ] }),
          message.isBugsFeatures && message.bugsFeatures && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: message.bugsFeatures.map((update) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleBugFeatureClick(update),
              className: "w-full text-left p-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 group hover:shadow-md",
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full mt-2 ${update.type === "feature" ? "bg-green-500" : "bg-blue-500"}` }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-800 mb-1 font-sans", children: update.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2 font-sans", children: update.description }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-600 group-hover:text-blue-700 font-sans", children: "Create email draft →" })
                ] })
              ] })
            },
            update.id
          )) }),
          message.isEmailDraft && message.emailDraft && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 font-sans", children: "Email Draft" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-600 font-sans", children: "Subject: " }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-800 font-sans", children: message.emailDraft.subject })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "border-t pt-3", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-gray-700 leading-relaxed font-sans", children: message.emailDraft.content }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleSendUpdateEmail(message.emailDraft.type),
                className: "px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans",
                children: [
                  /* @__PURE__ */ jsx(Send, { className: "w-4 h-4" }),
                  "Send Email"
                ]
              }
            ) })
          ] }),
          message.isMeetingPrep && message.meetingPrep && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-blue-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 font-sans", children: "Meeting Details" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-blue-700 leading-relaxed font-sans", children: message.meetingPrep.meetingDetails })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 border border-green-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-green-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-green-800 font-sans", children: "Key Account Details" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-green-700 leading-relaxed font-sans", children: message.meetingPrep.keyAccountDetails })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 border border-purple-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-purple-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-purple-800 font-sans", children: "Product Usage" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full bg-white rounded-lg border border-purple-200", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { className: "bg-purple-100", children: message.meetingPrep.productUsage.headers.map((header, index) => /* @__PURE__ */ jsx("th", { className: "px-4 py-2 text-left text-sm font-semibold text-purple-800 border-b border-purple-200 font-sans", children: header }, index)) }) }),
                /* @__PURE__ */ jsx("tbody", { children: message.meetingPrep.productUsage.rows.map((row, rowIndex) => /* @__PURE__ */ jsx("tr", { className: "hover:bg-purple-25", children: row.map((cell, cellIndex) => /* @__PURE__ */ jsx("td", { className: "px-4 py-2 text-sm text-purple-700 border-b border-purple-100 font-sans", children: cell }, cellIndex)) }, rowIndex)) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 border border-orange-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-orange-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-orange-800 font-sans", children: "Support Engagement" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-orange-700 leading-relaxed font-sans", children: message.meetingPrep.supportEngagement })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 border border-teal-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-teal-600" }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-teal-800 font-sans", children: "CS Engagement" })
              ] }),
              /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-sm text-teal-700 leading-relaxed font-sans", children: message.meetingPrep.csEngagement })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: handleMeetingPrepared,
                className: "px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 shadow-md hover:shadow-lg font-sans",
                children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
                  "I'm Prepared"
                ]
              }
            ) })
          ] }),
          message.isTaskList && message.taskList && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-3", children: message.taskList.map((task) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => handleTaskClick(task),
              className: "w-full text-left p-4 bg-white border border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-200 group hover:shadow-md",
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${task.priority === "high" ? "bg-red-500" : task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}` }),
                  /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-800", children: task.title })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${task.dueDate.includes("Overdue") ? "bg-red-100 text-red-700" : task.dueDate.includes("today") ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"} font-sans`, children: task.dueDate }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-600 group-hover:text-blue-700 font-sans", children: "View details →" })
                ] })
              ] })
            },
            task.id
          )) }),
          message.isTaskDetail && message.taskDetail && /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 border border-blue-200 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full ${message.taskDetail.task.priority === "high" ? "bg-red-500" : message.taskDetail.task.priority === "medium" ? "bg-yellow-500" : "bg-green-500"}` }),
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-blue-800 font-sans", children: message.taskDetail.task.title }),
                /* @__PURE__ */ jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ml-auto ${message.taskDetail.task.dueDate.includes("Overdue") ? "bg-red-100 text-red-700" : message.taskDetail.task.dueDate.includes("today") ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"} font-sans`, children: message.taskDetail.task.dueDate })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 mb-3 font-sans", children: message.taskDetail.task.description }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm font-sans", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Context:" }),
                  " ",
                  message.taskDetail.task.context
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Time needed:" }),
                  " ",
                  message.taskDetail.task.timeNeeded
                ] }),
                message.taskDetail.task.dependencies && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("strong", { children: "Dependencies:" }),
                  " ",
                  message.taskDetail.task.dependencies
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 justify-center", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleTaskAction("Done", message.taskDetail.task.title),
                  className: "px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans",
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4" }),
                    "Done"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleTaskAction("Change due date to tomorrow", message.taskDetail.task.title),
                  className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans",
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4" }),
                    "Change due date to tomorrow"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleTaskAction("Not relevant anymore", message.taskDetail.task.title),
                  className: "px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 font-sans",
                  children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4" }),
                    "Not relevant anymore"
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-3 justify-end", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-1 flex justify-end", children: /* @__PURE__ */ jsx("div", { className: "text-white rounded-2xl rounded-tr-md p-4 shadow-sm max-w-2xl font-sans", style: { background: "linear-gradient(to right, #039143, #027a3a)" }, children: /* @__PURE__ */ jsx("p", { className: "leading-relaxed font-sans", children: message.content }) }) }),
        /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(User, { className: "w-4 h-4 text-gray-600" }) })
      ] }) }, message.id)),
      isTyping && /* @__PURE__ */ jsxs("div", { className: "flex gap-3 animate-fade-in", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/RetainSureIcon.png",
            alt: "RetainSure AI",
            className: "w-8 h-8 rounded-full object-cover flex-shrink-0"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans" }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans", style: { animationDelay: "0.1s" } }),
          /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce font-sans", style: { animationDelay: "0.2s" } })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white border-t border-gray-200 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1 relative", children: /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: userInput,
          onChange: (e) => setUserInput(e.target.value),
          onKeyPress: (e) => e.key === "Enter" && handleSendMessage(),
          placeholder: "Ask me anything about your business...",
          className: "w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:border-transparent font-sans",
          style: { "--tw-ring-color": "#039143" }
        }
      ) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSendMessage,
          className: "w-12 h-12 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg",
          style: {
            background: "linear-gradient(to right, #039143, #027a3a)"
          },
          onMouseEnter: (e) => {
            e.currentTarget.style.background = "linear-gradient(to right, #027a3a, #025a2b)";
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.background = "linear-gradient(to right, #039143, #027a3a)";
          },
          children: /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" })
        }
      )
    ] }) })
  ] });
};
function CopilotAgentDemo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return /* @__PURE__ */ jsxs("div", { id: "copilot-demo-wrapper", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
      /* @__PURE__ */ jsx("title", { children: "Copilot Agent Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/interactive-demo/copilot-agent" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/interactive-demo/copilot-agent" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Copilot Agent Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/interactive-demo/copilot-agent" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Copilot Agent Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Interactive demo of RetainSure's Copilot Agent. Chat with your customer data using AI to get instant insights and recommendations." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" })
    ] }),
    isLoggedIn ? /* @__PURE__ */ jsx(ChatInterface, {}) : /* @__PURE__ */ jsx(LoginScreen, { onLogin: handleLogin })
  ] });
}
const Sidebar = ({ activeSection, setActiveSection }) => {
  const navigation = [
    { id: "home", name: "Home", icon: Home },
    { id: "templates", name: "Templates", icon: FileText },
    { id: "campaigns", name: "Campaigns", icon: Send, hasSubmenu: true },
    { id: "journey", name: "Journey", icon: Route },
    { id: "pages", name: "Pages & Forms", icon: FileImage, hasSubmenu: true },
    { id: "contacts", name: "Contacts", icon: Users },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "events", name: "Custom Events", icon: Zap },
    { id: "settings", name: "Settings", icon: Settings$1 },
    { id: "integrations", name: "Integrations", icon: Layers },
    { id: "notifications", name: "Notifications", icon: Bell, badge: true }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full bg-slate-800 text-white p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3", children: "M" }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-semibold", children: "TECH CORP" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "flex-grow", children: /* @__PURE__ */ jsx("ul", { children: navigation.map((item) => {
      const isActive = activeSection === item.id;
      return /* @__PURE__ */ jsx("li", { className: "mb-2", children: /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveSection(item.id),
          "data-section": item.id,
          id: item.id === "journey" ? "journey-nav" : void 0,
          className: `w-full flex items-center justify-between px-3 py-2.5 text-left rounded-lg transition-colors group ${isActive ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 mr-3" }),
              /* @__PURE__ */ jsx("span", { children: item.name })
            ] }),
            item.badge && /* @__PURE__ */ jsx("span", { className: "ml-auto bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full", children: "New" }),
            item.hasSubmenu && /* @__PURE__ */ jsx(
              "svg",
              {
                className: `ml-2 h-4 w-4 transition-transform ${isActive ? "rotate-90" : ""}`,
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9 5l7 7-7 7" })
              }
            )
          ]
        }
      ) }, item.id);
    }) }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-auto pt-4 border-t border-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700 p-4 rounded-lg text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-2", children: "Free Plan" }),
      /* @__PURE__ */ jsx("button", { className: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors", children: "Upgrade" })
    ] }) })
  ] });
};
const Dashboard = () => {
  const stats2 = [
    {
      name: "Total Campaigns",
      value: "24",
      change: "+12.5%",
      icon: Mail,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      name: "Active Subscribers",
      value: "8,247",
      change: "+8.3%",
      icon: Users,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      name: "Open Rate",
      value: "24.8%",
      change: "+2.1%",
      icon: MousePointer,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      name: "Click Rate",
      value: "4.2%",
      change: "+1.7%",
      icon: TrendingUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100 p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "Hey John, welcome to Tech Corp 🎉" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "You're really close to growing your conversion rates. Let's keep moving!" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: stats2.map((stat) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: `p-3 rounded-full ${stat.bgColor}`, children: /* @__PURE__ */ jsx(stat.icon, { className: `${stat.color} h-6 w-6` }) }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-500", children: stat.name })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-gray-900 mb-1", children: stat.value }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-green-600", children: stat.change }),
        " vs last month"
      ] })
    ] }, stat.name)) }),
    /* @__PURE__ */ jsxs("div", { className: "relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-white mb-8 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { className: "bg-white bg-opacity-20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 inline-block", children: "Premium" }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-2", children: "Upgrade to scale your growth" }),
          /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-4", children: "Upgrade your plan to experience a 3x conversion growth across your lists." }),
          /* @__PURE__ */ jsx("button", { className: "bg-white text-blue-700 font-semibold py-2 px-5 rounded-full shadow-md hover:bg-blue-50 transition duration-300", children: "Upgrade now" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxs("div", { className: "relative w-32 h-32", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute w-24 h-24 bg-blue-500 transform rotate-45 top-4 left-4 rounded-lg" }),
          /* @__PURE__ */ jsx("div", { className: "absolute w-24 h-24 bg-purple-500 transform rotate-45 -top-4 -right-4 rounded-lg" }),
          /* @__PURE__ */ jsx("div", { className: "absolute w-24 h-24 bg-pink-500 transform rotate-45 bottom-0 left-0 rounded-lg" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white rounded-lg shadow-sm p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-4", children: "Recent campaigns" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          { name: "Welcome Series - New Users", status: "Active", opens: "1,247", clicks: "89" },
          { name: "Product Launch Announcement", status: "Sent", opens: "2,156", clicks: "234" },
          { name: "Weekly Newsletter #42", status: "Draft", opens: "-", clicks: "-" },
          { name: "Abandoned Cart Recovery", status: "Active", opens: "892", clicks: "67" }
        ].map((campaign, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0 last:pb-0", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-gray-800", children: campaign.name }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx("span", { className: `font-semibold ${campaign.status === "Active" ? "text-green-600" : campaign.status === "Sent" ? "text-blue-600" : "text-gray-500"}`, children: campaign.status }),
              " ",
              "Opens: ",
              campaign.opens,
              " Clicks: ",
              campaign.clicks
            ] })
          ] }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-gray-400" })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-purple-100 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-purple-600 text-2xl", children: "✨" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-900 mb-2", children: "Ask Tech Corp AI" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Get instant help with your email marketing questions" }),
        /* @__PURE__ */ jsx("button", { className: "bg-purple-600 text-white font-semibold py-2 px-5 rounded-full shadow-md hover:bg-purple-700 transition duration-300", children: "Try now" })
      ] })
    ] })
  ] });
};
const JourneyDashboard = ({ setJourneyView }) => {
  const journeys = [
    {
      name: "Welcome Series - New Signups",
      status: "Active",
      contacts: 1247,
      openRate: "45.2%",
      clickRate: "8.9%",
      conversions: 89
    },
    {
      name: "Abandoned Cart Recovery",
      status: "Active",
      contacts: 892,
      openRate: "38.7%",
      clickRate: "12.1%",
      conversions: 67
    },
    {
      name: "Product Launch Announcement",
      status: "Paused",
      contacts: 2156,
      openRate: "28.1%",
      clickRate: "4.5%",
      conversions: 112
    },
    {
      name: "Weekly Newsletter",
      status: "Draft",
      contacts: 0,
      openRate: "-",
      clickRate: "-",
      conversions: 0
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-8 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900", children: "JOURNEYS" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Automate your customer engagement with powerful journeys." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-3", children: /* @__PURE__ */ jsxs(
        "button",
        {
          id: "create-journey-btn",
          onClick: () => setJourneyView("prebuilt"),
          className: "bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(Plus, { size: 20 }),
            /* @__PURE__ */ jsx("span", { children: "Create journey" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
        /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx(Filter, { size: 16 }),
          /* @__PURE__ */ jsx("span", { children: "Filter" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50", children: [
          /* @__PURE__ */ jsx("span", { children: "All Journeys" }),
          /* @__PURE__ */ jsx(ChevronDown, { size: 16 })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Search, { size: 20, className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search journeys...",
            className: "pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-md", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
      /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Journey Name" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Status" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Active Contacts" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Open Rate" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Click Rate" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Conversions" }),
        /* @__PURE__ */ jsx("th", { scope: "col", className: "relative px-6 py-3", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "View" }) })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: journeys.map((journey) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: journey.name }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm", children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${journey.status === "Active" ? "bg-green-100 text-green-800" : journey.status === "Paused" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`,
            children: journey.status
          }
        ) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: journey.contacts.toLocaleString() }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: journey.openRate }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: journey.clickRate }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: journey.conversions }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium", children: /* @__PURE__ */ jsxs("a", { href: "#", className: "text-blue-600 hover:text-blue-900 flex items-center", children: [
          "View ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "ml-1" })
        ] }) })
      ] }, journey.name)) })
    ] }) }) })
  ] });
};
const PrebuiltJourneys = ({ setJourneyView }) => {
  const categories = ["All", "Welcome", "Onboarding", "Engagement", "Nurture", "Re-engagement"];
  const journeys = [
    {
      category: "Welcome",
      industry: "SaaS",
      title: "SaaS Welcome Series",
      description: "A 5-email series to welcome new users and guide them to activation.",
      trigger: "New user signup",
      emails: 5,
      duration: "7 days"
    },
    {
      category: "Nurture",
      industry: "SaaS",
      title: "Webinar Nurture Sequence",
      description: "Engage and remind webinar registrants to maximize attendance and post-event conversion.",
      trigger: "User registers for webinar",
      emails: 3,
      duration: "7 days"
    },
    {
      category: "Engagement",
      industry: "Media",
      title: "Weekly Newsletter Engagement",
      description: "Keep your audience engaged with a curated weekly newsletter.",
      trigger: "Subscribes to newsletter",
      emails: 1,
      duration: "Weekly"
    },
    {
      category: "Nurture",
      industry: "B2B",
      title: "Lead Nurturing Funnel",
      description: "Nurture leads from awareness to consideration with targeted content.",
      trigger: "Downloads lead magnet",
      emails: 6,
      duration: "14 days"
    },
    {
      category: "Re-engagement",
      industry: "SaaS",
      title: "Inactive User Re-engagement",
      description: "Win back users who have become inactive with a targeted email series.",
      trigger: "User inactive for 30 days",
      emails: 3,
      duration: "5 days"
    },
    {
      category: "Welcome",
      industry: "E-commerce",
      title: "Welcome Discount Series",
      description: "Convert new subscribers into customers with a special welcome offer.",
      trigger: "New subscription",
      emails: 3,
      duration: "3 days"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs("div", { className: "w-64 bg-white border-r border-gray-200 p-6", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setJourneyView("dashboard"),
          className: "flex items-center text-sm font-semibold text-gray-600 hover:text-gray-900 mb-8",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 18, className: "mr-2" }),
            "Back to Journeys"
          ]
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold text-gray-900 mb-4", children: "CATEGORIES" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: categories.map((category) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: "#",
          className: `block px-3 py-2 rounded-lg text-sm font-medium ${category === "All" ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100"}`,
          children: category
        }
      ) }, category)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-8 overflow-y-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-2", children: "PRE-BUILT JOURNEYS" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "Select a pre-built journey to get started quickly." }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-md", children: [
          /* @__PURE__ */ jsx(Search, { size: 20, className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              placeholder: "Search journeys...",
              className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-3", children: [
          /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50", children: [
            /* @__PURE__ */ jsx(Filter, { size: 16 }),
            /* @__PURE__ */ jsx("span", { children: "Filter" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center space-x-2 hover:bg-gray-50", children: [
            /* @__PURE__ */ jsx("span", { children: "Sort by: Popular" }),
            /* @__PURE__ */ jsx(ChevronDown, { size: 16 })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: journeys.map((journey, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start mb-4", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-blue-600", children: journey.category }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500", children: journey.industry })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900 mb-2", children: journey.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: journey.description })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 mb-4", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Trigger:" }),
              " ",
              journey.trigger
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Emails:" }),
              " ",
              journey.emails
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Duration:" }),
              " ",
              journey.duration
            ] })
          ] }),
          /* @__PURE__ */ jsx("button", { className: "w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors", children: "Select Journey" })
        ] })
      ] }, index)) })
    ] })
  ] });
};
const Analytics = () => {
  const metrics = [
    { name: "Total Emails Sent", value: "125.4K", growth: "+18%", icon: Mail },
    { name: "Unique Opens", value: "31.2K", growth: "+12%", icon: Eye },
    { name: "Click-through Rate", value: "4.8%", growth: "+5%", icon: MousePointer },
    { name: "Conversion Rate", value: "2.1%", growth: "+24%", icon: Target },
    { name: "Subscribers", value: "8,247", growth: "+8%", icon: Users },
    { name: "Avg. Engagement", value: "6m 42s", growth: "+15%", icon: Clock }
  ];
  const campaignPerformance = [
    { name: "Welcome Series", sent: 2847, opens: 1423, clicks: 284, conversions: 89 },
    { name: "Product Launch", sent: 5621, opens: 2248, clicks: 449, conversions: 134 },
    { name: "Newsletter", sent: 8247, opens: 2474, clicks: 371, conversions: 67 },
    { name: "Abandoned Cart", sent: 1892, opens: 946, clicks: 189, conversions: 78 }
  ];
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-900 mb-8", children: "EMAIL ANALYTICS" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-10", children: "Track your email marketing performance and optimize your campaigns." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: metrics.map((metric) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 flex items-center space-x-4", children: [
      /* @__PURE__ */ jsx("div", { className: "p-3 bg-indigo-100 rounded-full text-indigo-600", children: /* @__PURE__ */ jsx(metric.icon, { size: 24 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-500", children: metric.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-baseline space-x-2", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-semibold text-gray-900", children: metric.value }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-green-600", children: [
            metric.growth,
            " vs last month"
          ] })
        ] })
      ] })
    ] }, metric.name)) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "CAMPAIGN PERFORMANCE" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "CAMPAIGN.NAME" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Sent" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Opens" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Clicks" }),
          /* @__PURE__ */ jsx("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider", children: "Conversions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "bg-white divide-y divide-gray-200", children: campaignPerformance.map((campaign) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900", children: campaign.name }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: campaign.sent.toLocaleString() }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: campaign.opens.toLocaleString() }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: campaign.clicks.toLocaleString() }),
          /* @__PURE__ */ jsx("td", { className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500", children: campaign.conversions })
        ] }, campaign.name)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "PERFORMANCE TRENDS" }),
      /* @__PURE__ */ jsx("div", { className: "flex items-end h-48 space-x-2", children: [65, 45, 78, 52, 89, 67, 43, 76, 91, 58, 84, 72].map((height, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center flex-grow", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-indigo-500 w-4 rounded-t-sm",
            style: { height: `${height}%` }
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500 mt-2", children: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][index] })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6 mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "TOP PERFORMING SUBJECT LINES" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
        { subject: "🎉 Your exclusive 30% discount is here!", rate: "45.2%" },
        { subject: "Last chance: Sale ends tonight", rate: "38.7%" },
        { subject: "New features you'll love", rate: "34.1%" },
        { subject: "Your weekly digest is ready", rate: "29.8%" }
      ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0 last:pb-0", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-medium text-gray-900", children: item.subject }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Open Rate" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-indigo-600", children: item.rate })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-md p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-900 mb-6", children: "SUBSCRIBER GROWTH" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700", children: "New Subscribers" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-green-900", children: "+247 this month" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-red-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: "Unsubscribes" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-red-900", children: "-23 this month" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Net Growth" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-900", children: "+224 this month" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-end h-48 space-x-2", children: [20, 35, 45, 32, 55, 48, 65, 58, 70, 62, 78, 85].map((height, index) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-blue-400 w-4 rounded-t-sm flex-grow",
          style: { height: `${height}%` }
        },
        index
      )) })
    ] })
  ] }) });
};
const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true
  });
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-100 p-8", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold text-gray-800 mb-2", children: "SETTINGS" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "Manage your account settings and preferences." }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold text-gray-700 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsx(User, { className: "mr-2 text-indigo-500", size: 20 }),
        " PROFILE INFORMATION"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "firstName", className: "block text-sm font-medium text-gray-700", children: "First Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "firstName",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
              placeholder: "John"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "lastName", className: "block text-sm font-medium text-gray-700", children: "Last Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "lastName",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
              placeholder: "Doe"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-gray-700", children: "Email" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              id: "email",
              className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
              placeholder: "john.doe@example.com"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-xl font-semibold text-gray-700 mb-4 flex items-center", children: [
        /* @__PURE__ */ jsx(Bell, { className: "mr-2 text-indigo-500", size: 20 }),
        " NOTIFICATIONS"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: Object.entries(notifications).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "text-lg font-medium text-gray-900 capitalize", children: [
            key === "sms" ? "SMS" : key,
            " Notifications"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
            "Receive ",
            key === "sms" ? "SMS" : key,
            " notifications for important updates."
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setNotifications((prev) => ({ ...prev, [key]: !value })),
            className: `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${value ? "bg-indigo-600" : "bg-gray-200"}`,
            children: /* @__PURE__ */ jsx(
              "span",
              {
                className: `inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${value ? "translate-x-6" : "translate-x-1"}`
              }
            )
          }
        )
      ] }, key)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-gray-700 mb-4", children: "QUICK ACTIONS" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
          /* @__PURE__ */ jsx(Shield, { className: "mr-2", size: 18 }),
          " Security Settings"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
          /* @__PURE__ */ jsx(CreditCard, { className: "mr-2", size: 18 }),
          " Billing & Plans"
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: [
          /* @__PURE__ */ jsx(Palette, { className: "mr-2", size: 18 }),
          " Appearance"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-indigo-800 mb-1", children: "PREMIUM PLAN" }),
        /* @__PURE__ */ jsx("p", { className: "text-indigo-600", children: "You're on our premium plan with unlimited access to all features." })
      ] }),
      /* @__PURE__ */ jsx("button", { className: "px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500", children: "Manage Plan" })
    ] })
  ] }) });
};
const Help = () => {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics and set up your account",
      icon: Book,
      articles: ["Account Setup", "First Steps", "Dashboard Overview"]
    },
    {
      title: "Features & Tools",
      description: "Explore all available features and tools",
      icon: FileText,
      articles: ["Analytics Guide", "Integration Setup", "Advanced Features"]
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides",
      icon: Video,
      articles: ["Platform Overview", "Advanced Analytics", "Team Management"]
    },
    {
      title: "Support",
      description: "Get help from our support team",
      icon: MessageCircle,
      articles: ["Contact Support", "Report Issues", "Feature Requests"]
    }
  ];
  const popularArticles = [
    "How to create your first project",
    "Understanding analytics metrics",
    "Setting up team permissions",
    "API integration guide",
    "Troubleshooting common issues"
  ];
  return /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-6", children: "HELP CENTER" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-8", children: "Find answers to your questions and get support." }),
    /* @__PURE__ */ jsx("div", { className: "mb-10", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search for articles, topics, or keywords...",
          className: "w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: helpCategories.map((category) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-md border border-gray-200", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
        /* @__PURE__ */ jsx(category.icon, { className: "text-blue-600 mr-3", size: 24 }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: category.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-4", children: category.description }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.articles.map((article) => /* @__PURE__ */ jsx("li", { className: "text-blue-600 hover:underline cursor-pointer", children: article }, article)) })
    ] }, category.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "FREQUENTLY ASKED QUESTIONS" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
        "How do I reset my password?",
        "Can I upgrade my plan at any time?",
        "How do I invite team members?",
        "What payment methods do you accept?"
      ].map((question) => /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200", children: /* @__PURE__ */ jsx("p", { className: "font-medium", children: question }) }, question)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "POPULAR ARTICLES" }),
      /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: popularArticles.map((article) => /* @__PURE__ */ jsx("li", { className: "text-blue-600 hover:underline cursor-pointer", children: article }, article)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-8 rounded-lg text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "NEED MORE HELP?" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 mb-6", children: "Can't find what you're looking for? Our support team is here to help." }),
      /* @__PURE__ */ jsx("button", { className: "bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors", children: "Contact Support" })
    ] })
  ] });
};
const customerProfile = {
  name: "John",
  company: "TechCorp",
  plan: "Premium",
  joinDate: "2024-08-15",
  goals: ["Improve email open rates", "Increase webinar signups"],
  currentMetrics: {
    openRate: "24.8%",
    clickRate: "2.1%",
    conversionRate: "1.2%"
  },
  industryBenchmarks: {
    openRate: "30%",
    clickRate: "3.8%",
    conversionRate: "2.5%"
  },
  lastActivity: "2024-12-20",
  healthScore: 75,
  riskLevel: "Medium"
};
const bugUpdates = [
  {
    id: "BUG-2024-156",
    title: "Email template preview not loading",
    status: "Fixed",
    reportedDate: "2024-12-15",
    fixedDate: "2024-12-19",
    description: "Template preview was failing due to CSS rendering issue",
    fix: "Updated the CSS parser to handle custom fonts properly. Preview now loads 3x faster.",
    impact: "High",
    category: "Template Editor"
  },
  {
    id: "BUG-2024-142",
    title: "Analytics dashboard slow loading",
    status: "In Progress",
    reportedDate: "2024-12-10",
    description: "Dashboard takes 15+ seconds to load campaign data",
    eta: "2024-12-22",
    category: "Analytics"
  }
];
const warmupPlan = {
  phase1: {
    title: "Foundation (Week 1-2)",
    tasks: [
      "Set up domain authentication (SPF, DKIM, DMARC)",
      "Create 3 high-performing email templates",
      "Build your first welcome series journey",
      "Import and segment your contact list"
    ]
  },
  phase2: {
    title: "Optimization (Week 3-4)",
    tasks: [
      "Launch A/B tests on subject lines",
      "Set up behavioral triggers",
      "Create re-engagement campaigns",
      "Implement advanced analytics tracking"
    ]
  },
  phase3: {
    title: "Scale (Week 5-8)",
    tasks: [
      "Launch multi-channel campaigns",
      "Set up advanced automation workflows",
      "Implement predictive analytics",
      "Create customer lifecycle journeys"
    ]
  }
};
const AICsmWidget = ({ isMinimized = false, onMinimize, onExpand, setIsGuidedTourActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [transcript, setTranscript] = useState("");
  const [inputText, setInputText] = useState("");
  useState(false);
  const [lastAIMessageText, setLastAIMessageText] = useState("");
  const [activeWorkflow, setActiveWorkflow] = useState(null);
  useState(null);
  useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [avatarState, setAvatarState] = useState("idle");
  const [isControllingScreen, setIsControllingScreen] = useState(false);
  const [currentPointer, setCurrentPointer] = useState(null);
  const [isExecutingTask, setIsExecutingTask] = useState(false);
  useState(0);
  const [taskProgress, setTaskProgress] = useState(null);
  const [isWaitingForUser, setIsWaitingForUser] = useState(false);
  const [guidedMode, setGuidedMode] = useState(false);
  const [expandedBug, setExpandedBug] = useState(null);
  const [currentUseCase, setCurrentUseCase] = useState(null);
  const [recognition, setRecognition] = useState(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      text: `Hey ${customerProfile.name}! I'm Jaine, your dedicated AI Customer Success Manager. I've been reviewing your progress since our onboarding call on August 15th, and I have some important updates based on the goals we discussed:`,
      bulletPoints: [
        { icon: "🐛", title: "Bug Update", text: "Remember that template preview issue you reported last week? Great news - our engineering team has fixed it! Your templates should now load 3x faster." },
        { icon: "📊", title: "Performance Alert", text: `During our onboarding, you mentioned wanting to achieve 24% open rates and 3.8% click rates. I'm seeing you're currently at ${customerProfile.currentMetrics.openRate} open rate and ${customerProfile.currentMetrics.clickRate} click rate - we need to close this gap to hit your Q1 targets.` },
        { icon: "🎯", title: "Webinar Journey - Still Pending", text: "You mentioned in our onboarding call that webinar signups are crucial for your business growth. I notice you still haven't set up the automated webinar journey we discussed - this could be costing you 40% of potential conversions." }
      ],
      actions: [
        { id: "setup-journey", text: "Setup Webinar Journey Now", type: "primary" },
        { id: "performance-review", text: "Show Me Performance Gap Analysis", type: "secondary" }
      ],
      timestamp: /* @__PURE__ */ new Date()
    }
  ]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  useRef(null);
  useRef(null);
  const audioRef = useRef(null);
  const speakText = async (text) => {
    if (!voiceEnabled) return;
    setLastAIMessageText(text);
    stopSpeaking();
    const cleanText = text.replace(/[🎉🐛📊🎯✨🚨📈⚙️]/g, "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1").replace(/#{1,6}\s/g, "").replace(/\n+/g, ". ").trim();
    if (!cleanText) return;
    const apiKey = "94b7807b5200631e37cb3e22267f4962591a8b9d62d4bd09a43e742a8d912be2";
    try {
      setIsSpeaking(true);
      setAvatarState("speaking");
      const voiceId = "EXAVITQu4vr4xnSDxMaL";
      const response = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`,
        {
          method: "POST",
          headers: {
            "Accept": "audio/mpeg",
            "Content-Type": "application/json",
            "xi-api-key": apiKey
          },
          body: JSON.stringify({
            text: cleanText,
            model_id: "eleven_turbo_v2",
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.8,
              style: 0,
              use_speaker_boost: true
            },
            optimize_streaming_latency: 4
          })
        }
      );
      if (!response.ok) {
        throw new Error(`ElevenLabs API error: ${response.status}`);
      }
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      audio.onended = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      audio.onerror = () => {
        setIsSpeaking(false);
        setAvatarState("idle");
        URL.revokeObjectURL(audioUrl);
        audioRef.current = null;
      };
      await audio.play();
    } catch (error) {
      console.error("Error with ElevenLabs TTS:", error);
      setIsSpeaking(false);
      setAvatarState("idle");
    }
  };
  const stopSpeaking = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.src = "";
      audioRef.current = null;
    }
    setIsSpeaking(false);
    setAvatarState("idle");
  };
  const toggleVoice = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setVoiceEnabled(!voiceEnabled);
  };
  useEffect(() => {
    if (!voiceEnabled && isSpeaking) {
      stopSpeaking();
    } else if (voiceEnabled && !isSpeaking && lastAIMessageText) {
      speakText(lastAIMessageText);
    }
  }, [voiceEnabled]);
  useEffect(() => {
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;
      recognitionInstance.lang = "en-US";
      recognitionInstance.onstart = () => {
        setIsListening(true);
        setTranscript("");
      };
      recognitionInstance.onresult = (event) => {
        let interimTranscript = "";
        let finalTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript2 = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript2;
          } else {
            interimTranscript += transcript2;
          }
        }
        setTranscript(finalTranscript || interimTranscript);
        if (finalTranscript) {
          handleVoiceMessage(finalTranscript);
        }
      };
      recognitionInstance.onend = () => {
        setIsListening(false);
        setTranscript("");
      };
      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
        setTranscript("");
      };
      setRecognition(recognitionInstance);
    }
  }, []);
  const handleVoiceMessage = (text) => {
    setInputText(text);
    handleSendMessage();
  };
  const startListening = () => {
    if (recognition) {
      recognition.start();
    }
  };
  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };
  const ProfessionalAvatar = ({ size = "normal", state = "idle" }) => {
    const isLarge = size === "large";
    const containerClass = isLarge ? "w-16 h-16" : "w-8 h-8";
    return /* @__PURE__ */ jsxs("div", { className: `relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#039143] to-[#027a3a] text-white shadow-lg ${containerClass}`, children: [
      /* @__PURE__ */ jsx("img", { src: "/jaine.jpeg", alt: "Jaine", className: "rounded-full w-full h-full object-cover" }),
      state === "speaking" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full animate-pulse-light bg-white opacity-30" }),
      state === "listening" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full animate-ping-slow bg-blue-300 opacity-50" }),
      state === "thinking" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full animate-pulse-fast bg-yellow-300 opacity-50" })
    ] });
  };
  const ScreenPointer = () => {
    if (!currentPointer || !isControllingScreen) return null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed z-[9999] transition-all duration-500 ease-in-out",
        style: { left: currentPointer.x, top: currentPointer.y },
        children: [
          /* @__PURE__ */ jsx(MousePointer, { className: "w-8 h-8 text-[#039143] drop-shadow-lg animate-bounce-subtle" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-8 left-4 bg-[#039143] text-white text-xs px-2 py-1 rounded-md shadow-md whitespace-nowrap", children: "AI Jaine" }),
          currentPointer.message && /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-8 bg-white text-gray-800 text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap border border-gray-200 animate-fade-in-up", children: currentPointer.message }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -m-2 rounded-full bg-[#039143] opacity-30 animate-ripple" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -m-4 rounded-full bg-[#039143] opacity-20 animate-ripple-delay" })
        ]
      }
    );
  };
  const TaskProgressIndicator = () => {
    if (!taskProgress) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 right-4 z-[9998] bg-white p-4 rounded-lg shadow-xl border border-gray-200 flex items-center space-x-3 animate-fade-in-up", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(ProfessionalAvatar, { size: "normal", state: "thinking" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "font-semibold text-gray-800 text-sm flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-[#039143]" }),
          /* @__PURE__ */ jsx("span", { children: "AI JAINE IS WORKING" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-gray-600 text-xs mt-1", children: taskProgress.currentTask }),
        /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-1.5 mt-2", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-[#039143] h-1.5 rounded-full transition-all duration-500",
            style: { width: `${taskProgress.completed / taskProgress.total * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [
          "Step ",
          taskProgress.completed,
          " of ",
          taskProgress.total,
          " ",
          Math.round(taskProgress.completed / taskProgress.total * 100),
          "% complete"
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setIsExecutingTask(false);
        setTaskProgress(null);
        setIsControllingScreen(false);
        setCurrentPointer(null);
        onExpand == null ? void 0 : onExpand();
      }, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) })
    ] });
  };
  const WaitingIndicator = () => {
    if (!isWaitingForUser) return null;
    return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 left-1/2 -translate-x-1/2 z-[9998] bg-purple-600 text-white p-4 rounded-lg shadow-xl flex items-center space-x-3 animate-fade-in-up", children: [
      /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Waiting for you to click..." }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setIsWaitingForUser(false);
        setIsControllingScreen(false);
        setCurrentPointer(null);
        onExpand == null ? void 0 : onExpand();
      }, className: "text-purple-200 hover:text-white", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) })
    ] });
  };
  const BugUpdateCard = ({ bug }) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-2 cursor-pointer hover:shadow-md transition-shadow", onClick: () => setExpandedBug(expandedBug === bug.id ? null : bug.id), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-800", children: bug.title }),
      /* @__PURE__ */ jsx("span", { className: `px-2 py-1 text-xs font-medium rounded-full ${bug.status === "Fixed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`, children: bug.status })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
      "#",
      bug.id,
      " • ",
      bug.category
    ] }),
    expandedBug === bug.id && /* @__PURE__ */ jsxs("div", { className: "mt-3 text-sm text-gray-700", children: [
      /* @__PURE__ */ jsx("p", { className: "font-medium mt-2", children: "Description:" }),
      /* @__PURE__ */ jsx("p", { children: bug.description }),
      bug.fix && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { className: "font-medium mt-2", children: "Fix Applied:" }),
        /* @__PURE__ */ jsx("p", { children: bug.fix })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-2", children: [
        "Reported: ",
        bug.reportedDate,
        " ",
        bug.fixedDate && `• Fixed: ${bug.fixedDate}`,
        " ",
        bug.eta && `• ETA: ${bug.eta}`
      ] })
    ] })
  ] });
  const PerformanceReview = () => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4", children: [
    /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg text-gray-800 mb-3 flex items-center", children: [
      /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 mr-2 text-[#039143]" }),
      " 📋 YOUR GOALS VS CURRENT PERFORMANCE"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-3", children: 'From our onboarding call: "I want to achieve industry-leading email performance to increase webinar attendance."' }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 mb-4 space-y-1", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        "Open Rate Goal: ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: customerProfile.currentMetrics.openRate }),
        " → ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: customerProfile.industryBenchmarks.openRate }),
        " (Gap: -5.2%)"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Click Rate Goal: ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: customerProfile.currentMetrics.clickRate }),
        " → ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: customerProfile.industryBenchmarks.clickRate }),
        " (Gap: -1.7%)"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Conversion Goal: ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: customerProfile.currentMetrics.conversionRate }),
        " → ",
        /* @__PURE__ */ jsx("span", { className: "font-semibold", children: customerProfile.industryBenchmarks.conversionRate }),
        " (Gap: -1.3%)"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("h4", { className: "font-bold text-md text-gray-800 mb-2 flex items-center", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-2 text-blue-500" }),
      " 💡 BASED ON YOUR TECHCORP USE CASE"
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 mb-4 space-y-1", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        `• Subject Line Optimization: Your current "Newsletter #42" style isn\\'t working. Let\\'s test personalized subject lines like "Hey `,
        customerProfile.name,
        ', your TechCorp insights are ready"'
      ] }),
      /* @__PURE__ */ jsx("li", { children: "• Webinar Journey: You mentioned 60% of your revenue comes from webinar attendees - this automation is critical" }),
      /* @__PURE__ */ jsx("li", { children: `• Behavioral Triggers: Set up the "engaged but didn\\'t convert" sequence we discussed for your SaaS prospects` }),
      /* @__PURE__ */ jsx("li", { children: "• Churn Prevention: The re-engagement campaign for inactive users (your #1 concern from onboarding)" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 mb-4", children: "If these quick fixes don\\'t work - we might need to do a warmup of your domains. Do you want me to generate a warmup plan?" }),
    /* @__PURE__ */ jsxs("h4", { className: "font-bold text-md text-gray-800 mb-2 flex items-center", children: [
      /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 mr-2 text-yellow-500" }),
      " 🎯 IMPACT PROJECTION"
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-sm text-gray-700 mb-4 space-y-1", children: [
      /* @__PURE__ */ jsx("li", { children: "• +2,080 more email opens per month (5.2% improvement)" }),
      /* @__PURE__ */ jsx("li", { children: "• +180 more clicks per month (1.7% improvement)" }),
      /* @__PURE__ */ jsx("li", { children: "• +$12,000 additional revenue from webinar conversions" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: 'This gets you to your Q1 goal of "3x webinar attendance" that you mentioned.' })
  ] });
  const WarmupPlan = () => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-4", children: [
    /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg text-gray-800 mb-3 flex items-center", children: [
      /* @__PURE__ */ jsx(Bell, { className: "w-5 h-5 mr-2 text-blue-500" }),
      " YOUR CUSTOM WARMUP PLAN"
    ] }),
    Object.entries(warmupPlan).map(([key, phase]) => /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-md text-gray-800 mb-2", children: phase.title }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside text-sm text-gray-700 space-y-1", children: phase.tasks.map((task, index) => /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-[#039143] mr-1", children: "•" }),
        task
      ] }, index)) })
    ] }, key))
  ] });
  const executeCSMTask = async (taskType) => {
    setCurrentUseCase(taskType);
    switch (taskType) {
      case "performance-audit":
        setIsExecutingTask(true);
        setIsControllingScreen(true);
        onMinimize == null ? void 0 : onMinimize();
        const auditSteps = [
          { step: "Navigating to Analytics", x: 128, y: 336, message: "Analytics", action: "navigate" },
          { step: "Analyzing campaign performance", x: 600, y: 300, message: "Reviewing metrics", action: "analyze" },
          { step: "Identifying improvement areas", x: 800, y: 400, message: "Finding gaps", action: "analyze" },
          { step: "Generating recommendations", x: 500, y: 200, message: "Creating action plan", action: "generate" }
        ];
        await executeTaskSteps(auditSteps, "Performance audit complete! I found 3 key areas for improvement.");
        break;
      case "template-optimization":
        setIsExecutingTask(true);
        setIsControllingScreen(true);
        onMinimize == null ? void 0 : onMinimize();
        const templateSteps = [
          { step: "Opening template library", x: 128, y: 154, message: "Templates", action: "navigate" },
          { step: "Analyzing current templates", x: 600, y: 300, message: "Reviewing designs", action: "analyze" },
          { step: "Suggesting improvements", x: 800, y: 200, message: "Optimizing CTAs", action: "optimize" }
        ];
        await executeTaskSteps(templateSteps, "Template optimization complete! Updated 5 templates with better CTAs and mobile responsiveness.");
        break;
    }
  };
  const executeTaskSteps = async (steps2, completionMessage) => {
    var _a2;
    setTaskProgress({ total: steps2.length, completed: 0, currentTask: ((_a2 = steps2[0]) == null ? void 0 : _a2.step) || "Starting..." });
    for (let i = 0; i < steps2.length; i++) {
      const step = steps2[i];
      setTaskProgress({ total: steps2.length, completed: i, currentTask: step.step });
      setCurrentPointer({ x: step.x, y: step.y, message: step.message, action: step.action });
      await new Promise((resolve) => setTimeout(resolve, 2500));
    }
    setTaskProgress({ total: steps2.length, completed: steps2.length, currentTask: "Complete!" });
    setTimeout(() => {
      setIsExecutingTask(false);
      setTaskProgress(null);
      setIsControllingScreen(false);
      setCurrentPointer(null);
      setCurrentUseCase(null);
      onExpand == null ? void 0 : onExpand();
      const completionMsg = {
        id: messages.length + 1,
        type: "ai",
        text: `🎉 ${completionMessage}`,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, completionMsg]);
    }, 1500);
  };
  const startGuidedTour = () => {
    setIsExpanded(false);
    setGuidedMode(true);
    setIsControllingScreen(true);
    setIsWaitingForUser(true);
    setIsGuidedTourActive(true);
    setCurrentPointer({ x: 188, y: 264, message: "Click Journey", action: "click" });
    const journeyNav = document.querySelector('[data-section="journey"]');
    if (journeyNav) {
      const handleJourneyClick = () => {
        setCurrentPointer({ x: 1280, y: 66, message: "Click Create journey", action: "click" });
        journeyNav.removeEventListener("click", handleJourneyClick);
        setTimeout(() => {
          const createBtn = document.getElementById("create-journey-btn");
          if (createBtn) {
            const handleCreateClick = () => {
              setCurrentPointer({ x: 904, y: 335, message: "Demo ends here", action: "demo-end" });
              setIsWaitingForUser(false);
              setIsGuidedTourActive(false);
              createBtn.removeEventListener("click", handleCreateClick);
            };
            createBtn.addEventListener("click", handleCreateClick);
          }
        }, 500);
      };
      journeyNav.addEventListener("click", handleJourneyClick);
    }
  };
  const handleActionClick = (actionId) => {
    setActiveTab("chat");
    const workflowActions = ["bug-updates", "performance-review", "warmup-plan", "setup-journey", "performance-audit", "template-optimization"];
    if (workflowActions.includes(actionId)) {
      setMessages([]);
    }
    switch (actionId) {
      case "bug-updates":
        const bugMessage = {
          id: messages.length + 1,
          type: "ai",
          text: "Here are the latest updates on your reported issues:",
          timestamp: /* @__PURE__ */ new Date(),
          customComponent: "bug-updates"
        };
        setMessages((prev) => [...prev, bugMessage]);
        speakText("Here are the latest updates on your reported issues. The template preview issue you mentioned has been fixed and should now load much faster.");
        break;
      case "performance-review":
        setActiveWorkflow("performance-review");
        const perfMessage = {
          id: messages.length + 1,
          type: "ai",
          text: `${customerProfile.name}, I've done a deep dive into your performance since our onboarding call. Remember when you told me your main goal was to "improve email engagement"? Here's where we stand against those targets:

Based on your TechCorp use case, if the quick fixes don't work - we might need to do a warmup of your domains. Do you want me to generate a warmup plan?`,
          timestamp: /* @__PURE__ */ new Date(),
          customComponent: "performance-review",
          actions: [
            { id: "warmup-plan", text: "Generate Warmup Plan", type: "primary" }
          ]
        };
        setMessages((prev) => [...prev, perfMessage]);
        speakText(`${customerProfile.name}, I've analyzed your performance since our onboarding call. You wanted to achieve 30% open rates, but you're currently at 24.8%. Your click rate goal was 3.8% but you're at 2.1%. Based on your TechCorp use case, if the quick fixes don't work, we might need to do a warmup of your domains. Do you want me to generate a warmup plan?`);
        break;
      case "warmup-plan":
        setActiveWorkflow(null);
        const warmupMessage = {
          id: messages.length + 1,
          type: "ai",
          text: `Perfect! Based on your "increase open rate" goal and your current performance gap, here's your custom success roadmap - an 8-week warmup plan designed specifically to get you from 24.8% to 30% open rate:`,
          timestamp: /* @__PURE__ */ new Date(),
          customComponent: "warmup-plan",
          actions: [
            { id: "schedule-checkin", text: "Schedule Weekly Check-ins", type: "primary" }
          ]
        };
        setMessages((prev) => [...prev, warmupMessage]);
        speakText("Perfect! Based on your improve open rate goal and your current performance gap, I've created a custom success roadmap. This 8-week warmup plan is designed specifically to get you from 24.8% to 30% open rate.");
        break;
      case "setup-journey":
        setActiveWorkflow("webinar-journey");
        const journeyMessage = {
          id: messages.length + 1,
          type: "ai",
          text: `${customerProfile.name}, I remember during our onboarding you mentioned that webinar signups are your biggest conversion opportunity. You said "if I could just get more people to sign up for webinars, my business would grow 3x." 

It's been 4 months since then, and I notice this journey still isn't set up. This automated sequence could be generating 40% more webinar attendees right now. Let me walk you through setting it up:`,
          timestamp: /* @__PURE__ */ new Date(),
          actions: [
            { id: "guide-me", text: "Walk Me Through It Step-by-Step", type: "primary" }
          ]
        };
        setMessages((prev) => [...prev, journeyMessage]);
        speakText(`${customerProfile.name}, during our onboarding call, you mentioned webinar signups are crucial for your business growth. It's been 4 months, and this journey still isn't set up. This could be generating 40% more webinar attendees right now. Let me help you fix this.`);
        break;
      case "performance-audit":
      case "template-optimization":
        executeCSMTask(actionId);
        break;
      case "guide-me":
        startGuidedTour();
        break;
      case "show-analytics":
        break;
      case "schedule-checkin":
        const checkinMessage = {
          id: messages.length + 1,
          type: "ai",
          text: "Perfect! I've scheduled weekly check-ins every Tuesday at 2 PM. I'll review your progress, share insights, and help you stay on track with your goals. You'll get a summary email before each session. 📅",
          timestamp: /* @__PURE__ */ new Date()
        };
        setMessages((prev) => [...prev, checkinMessage]);
        break;
    }
  };
  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "user",
        text: inputText,
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, newMessage]);
      setInputText("");
      setIsTyping(false);
      setAvatarState("thinking");
      setTimeout(() => {
        setAvatarState("speaking");
        setIsSpeaking(true);
        const aiResponse = {
          id: messages.length + 2,
          type: "ai",
          text: getContextualAIResponse(inputText),
          timestamp: /* @__PURE__ */ new Date(),
          actions: getContextualActions(inputText)
        };
        setMessages((prev) => [...prev, aiResponse]);
        speakText(getContextualAIResponse(inputText));
        setTimeout(() => {
          setIsSpeaking(false);
          setAvatarState("idle");
        }, 2e3);
      }, 1500);
    }
  };
  const getContextualAIResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    if (activeWorkflow === "performance-review") {
      if (lowerMsg.includes("yes") || lowerMsg.includes("sure") || lowerMsg.includes("generate") || lowerMsg.includes("warmup")) {
        return "Perfect! I'll generate that warmup plan for you right now.";
      }
      if (lowerMsg.includes("no") || lowerMsg.includes("not now")) {
        setActiveWorkflow(null);
        return "No problem! Let me know if you need anything else.";
      }
    }
    if (activeWorkflow === "webinar-journey") {
      if (lowerMsg.includes("yes") || lowerMsg.includes("sure") || lowerMsg.includes("walk") || lowerMsg.includes("guide")) {
        return "Great! Let me walk you through setting up this webinar journey step by step.";
      }
    }
    if (lowerMsg.includes("analytics") || lowerMsg.includes("performance")) {
      return `${customerProfile.name}, I remember you telling me during onboarding that "analytics are crucial for my decision making." Looking at your current performance against the goals we set:`;
    }
    if (lowerMsg.includes("webinar")) {
      return `Perfect! You mentioned webinars are your biggest revenue driver. I've been tracking this since our call - you said "if I could just automate webinar signups, I'd save 10 hours a week." Let me show you exactly how to do this:`;
    }
    return `Based on our previous conversations and your TechCorp goals, here's what I recommend focusing on right now:`;
  };
  const getContextualActions = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();
    if (activeWorkflow === "performance-review") {
      if (lowerMsg.includes("yes") || lowerMsg.includes("sure") || lowerMsg.includes("generate") || lowerMsg.includes("warmup")) {
        return [
          { id: "warmup-plan", text: "Generate Warmup Plan", type: "primary" }
        ];
      }
      if (lowerMsg.includes("no") || lowerMsg.includes("not now")) {
        return [];
      }
    }
    if (activeWorkflow === "webinar-journey") {
      if (lowerMsg.includes("yes") || lowerMsg.includes("sure") || lowerMsg.includes("walk") || lowerMsg.includes("guide")) {
        return [
          { id: "guide-me", text: "Walk Me Through It Step-by-Step", type: "primary" }
        ];
      }
    }
    if (lowerMsg.includes("analytics")) {
      return [
        { id: "show-detailed-analytics", text: "Show Me The Full Performance Breakdown", type: "primary" },
        { id: "auto-setup", text: "Fix The Webinar Journey Issue Now", type: "secondary" }
      ];
    }
    if (lowerMsg.includes("webinar")) {
      return [
        { id: "setup-journey", text: "Set Up Webinar Journey", type: "primary" },
        { id: "show-webinar-template", text: "Show Me The Email Templates", type: "secondary" }
      ];
    }
    return [];
  };
  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
    setAvatarState(isListening ? "idle" : "listening");
  };
  const handleExpand = () => {
    setIsExpanded(true);
    onExpand == null ? void 0 : onExpand();
  };
  const handleMinimize = () => {
    setIsExpanded(false);
    onMinimize == null ? void 0 : onMinimize();
  };
  if (isMinimized && (isControllingScreen || isExecutingTask)) {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 right-4 z-[9999] bg-[#039143] text-white p-3 rounded-full shadow-lg flex items-center space-x-2 animate-bounce-subtle cursor-pointer", onClick: onExpand, children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "AI Jaine is active..." })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ScreenPointer, {}),
    /* @__PURE__ */ jsx(TaskProgressIndicator, {}),
    /* @__PURE__ */ jsx(WaitingIndicator, {}),
    isControllingScreen && !isExecutingTask && !isWaitingForUser && /* @__PURE__ */ jsxs("div", { className: "fixed top-4 right-4 z-[9998] bg-green-600 text-white p-3 rounded-lg shadow-xl flex items-center space-x-2 animate-fade-in-up", children: [
      /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5" }),
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "AI Jaine is guiding you" }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        setIsControllingScreen(false);
        setCurrentPointer(null);
        onExpand == null ? void 0 : onExpand();
      }, className: "text-green-200 hover:text-white", children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" }) })
    ] }),
    !isExpanded && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed bottom-8 right-8 z-50 cursor-pointer animate-fade-in",
        onClick: handleExpand,
        children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-16 h-16 rounded-full bg-green-400 animate-ping opacity-75" }),
          /* @__PURE__ */ jsx(ProfessionalAvatar, { size: "large", state: isSpeaking ? "speaking" : "idle" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -left-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full", children: "1" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 -left-4 transform -translate-x-full bg-gray-800 text-white text-xs px-2 py-1 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none", children: "AI Jaine - Your Success Manager" })
        ] })
      }
    ),
    isExpanded && /* @__PURE__ */ jsxs("div", { className: "fixed bottom-4 right-4 w-[450px] h-[700px] bg-white rounded-xl shadow-2xl flex flex-col z-50 border border-gray-200 animate-fade-in-up", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-[#039143] to-[#027a3a] text-white rounded-t-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(ProfessionalAvatar, { size: "normal", state: avatarState }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: "AI JAINE" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-200", children: isExecutingTask ? "Working on your task..." : isControllingScreen ? "Guiding you..." : "Your Customer Success Manager" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: toggleVoice, className: "p-2 hover:bg-white/20 rounded-lg transition-colors", children: voiceEnabled ? /* @__PURE__ */ jsx(Volume2, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(VolumeX, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("button", { onClick: handleMinimize, className: "p-2 hover:bg-white/20 rounded-lg transition-colors", children: /* @__PURE__ */ jsx(Minimize2, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsx("button", { onClick: () => setIsExpanded(false), className: "p-2 hover:bg-white/20 rounded-lg transition-colors", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex border-b border-gray-200 bg-gray-50", children: [
        /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("chat"), className: `flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${activeTab === "chat" ? "text-[#039143] border-b-2 border-[#039143] bg-green-50" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`, children: [
          /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Ask Me Anything" })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: () => setActiveTab("recommendations"), className: `flex-1 flex items-center justify-center space-x-2 py-3 px-4 text-sm font-medium transition-colors ${activeTab === "recommendations" ? "text-[#039143] border-b-2 border-[#039143] bg-green-50" : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"}`, children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: "Recommendations" })
        ] })
      ] }),
      activeTab === "recommendations" ? /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 bg-gray-50", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold text-sm text-red-600 mb-3 flex items-center", children: [
            /* @__PURE__ */ jsx(Bell, { className: "w-4 h-4 mr-2" }),
            " 🚨 URGENT - BLOCKING YOUR GOALS"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("button", { onClick: () => handleActionClick("bug-updates"), className: "text-left p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800", children: "Fixed: Your Template Issue" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: "The preview bug you reported is resolved - your templates now load 3x faster" })
            ] }),
            /* @__PURE__ */ jsxs("button", { onClick: () => handleActionClick("performance-review"), className: "text-left p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800", children: "Missing Your Open Rate Target" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-700 mt-1", children: [
                "You're at ",
                customerProfile.currentMetrics.openRate,
                " vs your ",
                customerProfile.industryBenchmarks.openRate,
                " goal - this gap is hurting your Q1 targets"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-red-600 mt-1", children: "You might need a warmup plan to get back on track" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "font-bold text-sm text-[#039143] mb-3 flex items-center", children: [
            /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 mr-2" }),
            " 📈 YOUR TOP PRIORITIES"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("button", { onClick: () => handleActionClick("setup-journey"), className: "text-left p-3 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800", children: "Your Webinar Goal: Still Not Set Up" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: `You wanted to "3x webinar signups" - this journey will get you there but it's been 4 months` })
          ] }) })
        ] })
      ] }) : (
        /* Chat Tab */
        /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50", children: [
          messages.map((message) => /* @__PURE__ */ jsxs("div", { className: `flex flex-col ${message.type === "ai" ? "items-start" : "items-end"}`, children: [
            /* @__PURE__ */ jsxs("div", { className: `flex items-end max-w-[80%] ${message.type === "ai" ? "" : "flex-row-reverse"}`, children: [
              message.type === "ai" && /* @__PURE__ */ jsx("div", { className: "mr-2 self-start", children: /* @__PURE__ */ jsx(ProfessionalAvatar, { size: "normal", state: isSpeaking && lastAIMessageText === message.text ? "speaking" : "idle" }) }),
              /* @__PURE__ */ jsxs("div", { className: `p-3 rounded-lg shadow-md ${message.type === "ai" ? "bg-white text-gray-800 border border-gray-200" : "bg-[#039143] text-white"}`, children: [
                /* @__PURE__ */ jsx("p", { className: "text-sm whitespace-pre-wrap", children: message.text }),
                message.bulletPoints && /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-1 text-sm", children: message.bulletPoints.map((point, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                  /* @__PURE__ */ jsx("span", { className: "mr-2", children: point.icon }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: point.title }),
                    ": ",
                    point.text
                  ] })
                ] }, index)) }),
                message.customComponent === "bug-updates" && /* @__PURE__ */ jsx("div", { className: "mt-3", children: bugUpdates.map((bug) => /* @__PURE__ */ jsx(BugUpdateCard, { bug }, bug.id)) }),
                message.customComponent === "performance-review" && /* @__PURE__ */ jsx(PerformanceReview, {}),
                message.customComponent === "warmup-plan" && /* @__PURE__ */ jsx(WarmupPlan, {}),
                message.type === "ai" && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center justify-end", children: [
                  /* @__PURE__ */ jsx("button", { onClick: () => speakText(message.text), className: "text-xs text-gray-500 hover:text-[#039143] flex items-center space-x-1 transition-colors", disabled: isSpeaking, children: isSpeaking && lastAIMessageText === message.text ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Volume2, { className: "w-3 h-3" }),
                    " Speaking..."
                  ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx(Play, { className: "w-3 h-3" }),
                    " Play"
                  ] }) }),
                  isSpeaking && lastAIMessageText === message.text && /* @__PURE__ */ jsxs("button", { onClick: stopSpeaking, className: "ml-2 text-xs text-gray-500 hover:text-red-500 flex items-center space-x-1 transition-colors", children: [
                    /* @__PURE__ */ jsx(Square, { className: "w-3 h-3" }),
                    " Stop"
                  ] })
                ] })
              ] }),
              message.type === "user" && /* @__PURE__ */ jsx("div", { className: "ml-2", children: /* @__PURE__ */ jsx(User, { className: "w-8 h-8 rounded-full bg-gray-300 p-1 text-gray-600" }) })
            ] }),
            message.type === "ai" && message.actions && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-start gap-2 mt-2 ml-10", children: message.actions.map((action) => /* @__PURE__ */ jsx("button", { onClick: () => handleActionClick(action.id), className: `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${action.type === "primary" ? "bg-[#039143] text-white hover:bg-[#027a3a]" : action.type === "secondary" ? "bg-green-100 text-[#039143] hover:bg-green-200" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`, children: action.text }, action.id)) })
          ] }, message.id)),
          /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
        ] })
      ),
      activeTab === "chat" && /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-gray-200 bg-white flex items-center space-x-2", children: [
        !recognition && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-xs", children: "Voice input not supported in this browser" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: inputRef,
            type: "text",
            value: inputText,
            onChange: (e) => setInputText(e.target.value),
            onKeyPress: (e) => e.key === "Enter" && handleSendMessage(),
            placeholder: isListening ? "Listening..." : "Type or speak your question...",
            disabled: isListening,
            className: "w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleListening,
            className: `p-2 rounded-full transition-colors ${isListening ? "bg-red-500 text-white hover:bg-red-600" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
            disabled: !recognition,
            children: isListening ? /* @__PURE__ */ jsx(MicOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Mic, { className: "w-5 h-5" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSendMessage,
            className: "p-2 rounded-full bg-[#039143] text-white hover:bg-[#027a3a] transition-colors",
            disabled: !inputText.trim(),
            children: /* @__PURE__ */ jsx(Send, { className: "w-5 h-5" })
          }
        )
      ] })
    ] })
  ] });
};
function ProductAdoptionDemo() {
  const [activeSection, setActiveSection] = useState("home");
  const [journeyView, setJourneyView] = useState("dashboard");
  const [isAIMinimized, setIsAIMinimized] = useState(false);
  const [isGuidedTourActive, setIsGuidedTourActive] = useState(false);
  useEffect(() => {
    if (activeSection === "journey" && !isGuidedTourActive) {
      setJourneyView("dashboard");
      const timer = setTimeout(() => {
        setJourneyView("prebuilt");
      }, 1e3);
      return () => clearTimeout(timer);
    }
  }, [activeSection, isGuidedTourActive]);
  const renderContent = () => {
    if (activeSection === "journey") {
      if (journeyView === "dashboard") {
        return /* @__PURE__ */ jsx(JourneyDashboard, { setJourneyView });
      } else {
        return /* @__PURE__ */ jsx(PrebuiltJourneys, { setJourneyView });
      }
    }
    switch (activeSection) {
      case "home":
        return /* @__PURE__ */ jsx(Dashboard, {});
      case "analytics":
        return /* @__PURE__ */ jsx(Analytics, {});
      case "settings":
        return /* @__PURE__ */ jsx(Settings, {});
      case "help":
        return /* @__PURE__ */ jsx(Help, {});
      default:
        return /* @__PURE__ */ jsx(Dashboard, {});
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
      /* @__PURE__ */ jsx("title", { children: "Product Adoption Agent Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Interactive demo of RetainSure's Product Adoption Agent. Explore AI-powered customer journey orchestration and product adoption tracking." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/interactive-demo/product-adoption-agent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `w-64 flex-shrink-0 ${isAIMinimized ? "filter blur-sm" : ""}`, children: /* @__PURE__ */ jsx(Sidebar, { activeSection, setActiveSection }) }),
    /* @__PURE__ */ jsx("main", { className: `flex-1 overflow-y-auto ${isAIMinimized ? "filter blur-sm" : ""}`, children: renderContent() }),
    /* @__PURE__ */ jsx(
      AICsmWidget,
      {
        isMinimized: isAIMinimized,
        onMinimize: () => setIsAIMinimized(true),
        onExpand: () => setIsAIMinimized(false),
        setIsGuidedTourActive
      }
    )
  ] });
}
function MeetingAgent() {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [activeSuggestions, setActiveSuggestions] = useState([]);
  const [isListening, setIsListening] = useState(true);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [conversationMessages, setConversationMessages] = useState([]);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const [automatedActions, setAutomatedActions] = useState([]);
  const [showMeetingSummary, setShowMeetingSummary] = useState(false);
  const [meetingEnded, setMeetingEnded] = useState(false);
  const suggestionFlows = [
    {
      id: "email-decline",
      type: "insight",
      trigger: "Customer mentioned email performance concerns",
      message: "Email open rate dropped 23% last month. Suggest A/B testing subject lines.",
      action: {
        primary: "Share insight",
        secondary: "Skip"
      },
      autoComplete: true,
      priority: "high",
      context: "Email Performance Alert",
      conversationFlow: [
        {
          id: "msg1",
          speaker: "csm",
          message: "Hi Sarah! I noticed your email open rates dropped about 23% last month. I wanted to discuss some strategies that could help improve your engagement.",
          timestamp: "10:42",
          delay: 2e3
        },
        {
          id: "msg2",
          speaker: "customer",
          message: "Oh wow, I didn't realize it was that much! We haven't tried A/B testing yet. What would you recommend?",
          timestamp: "10:42",
          delay: 5e3
        },
        {
          id: "msg3",
          speaker: "csm",
          message: "I can share some templates that have worked well for similar companies in your industry. Let me send those over after our call.",
          timestamp: "10:43",
          delay: 8e3
        },
        {
          id: "msg4",
          speaker: "customer",
          message: "That would be fantastic! We really need to get our email performance back on track.",
          timestamp: "10:43",
          delay: 11e3
        }
      ]
    },
    {
      id: "funding-congratulate",
      type: "opportunity",
      trigger: "Customer mentioned recent funding",
      message: "Congratulate on $15M Series B. Perfect time to discuss expansion plans.",
      action: {
        primary: "Congratulate",
        secondary: "Note for later"
      },
      autoComplete: true,
      priority: "medium",
      context: "Growth Opportunity",
      conversationFlow: [
        {
          id: "msg5",
          speaker: "csm",
          message: "Congratulations on closing your $15M Series B funding! That's incredible news. I'm curious about your expansion plans - are you looking to scale your team?",
          timestamp: "10:43",
          delay: 2e3
        },
        {
          id: "msg6",
          speaker: "customer",
          message: "Thank you! Yes, we're really excited. We're planning to double our marketing team and expand internationally.",
          timestamp: "10:44",
          delay: 4500
        },
        {
          id: "msg7",
          speaker: "csm",
          message: "That's fantastic! For international expansion, we have some great localization features. And with doubling your marketing team, you'll definitely need more seats. I'd love to discuss our enterprise plans.",
          timestamp: "10:45",
          delay: 7500
        },
        {
          id: "msg8",
          speaker: "customer",
          message: "Perfect timing! We'll definitely need more seats and any international support you can offer.",
          timestamp: "10:45",
          delay: 10500
        }
      ]
    },
    {
      id: "integration-issue",
      type: "alert",
      trigger: "Customer mentioned technical issues",
      message: "3 overdue API integration tickets. Address timeline and next steps.",
      action: {
        primary: "Address now",
        secondary: "Schedule follow-up"
      },
      autoComplete: true,
      priority: "high",
      context: "Critical Support Issue",
      conversationFlow: [
        {
          id: "msg9",
          speaker: "csm",
          message: "I wanted to address something urgent - I see you have 3 overdue API integration tickets. How is your development team handling this? I know these technical issues can be really frustrating.",
          timestamp: "10:46",
          delay: 2e3
        },
        {
          id: "msg10",
          speaker: "customer",
          message: "Yes, our developers are getting really frustrated. We could definitely use some expert help to resolve these issues.",
          timestamp: "10:46",
          delay: 4500
        },
        {
          id: "msg11",
          speaker: "csm",
          message: "Let me get our senior engineer on a call with your team this week. Would Thursday afternoon work for a technical deep-dive session?",
          timestamp: "10:47",
          delay: 7e3
        },
        {
          id: "msg12",
          speaker: "customer",
          message: "Thursday afternoon works perfectly! We really appreciate the proactive support.",
          timestamp: "10:47",
          delay: 9500
        }
      ],
      automatedAction: {
        type: "calendar",
        recipient: "sarah.chen@techflow.com",
        subject: "Technical Deep-dive: API Integration Support"
      }
    },
    {
      id: "expansion-task",
      type: "task",
      trigger: "Customer mentioned team growth",
      message: "Discuss seat expansion and training needs for new hires.",
      action: {
        primary: "Discuss expansion",
        secondary: "Complete task"
      },
      autoComplete: true,
      priority: "medium",
      context: "Upsell Opportunity",
      conversationFlow: [
        {
          id: "msg13",
          speaker: "csm",
          message: "I noticed from your recent activity that your team usage has increased significantly. Are you planning to expand your marketing team soon?",
          timestamp: "10:48",
          delay: 2e3
        },
        {
          id: "msg14",
          speaker: "customer",
          message: "Yes, exactly! We're planning to hire 5 more people in marketing over the next quarter.",
          timestamp: "10:48",
          delay: 4500
        },
        {
          id: "msg15",
          speaker: "csm",
          message: "That's exciting! For the new marketing hires, would you be interested in our advanced analytics package? It includes training sessions for new users.",
          timestamp: "10:49",
          delay: 7e3
        },
        {
          id: "msg16",
          speaker: "customer",
          message: "Yes, that sounds perfect. Training would be really valuable since they'll be using the platform heavily.",
          timestamp: "10:49",
          delay: 9500
        }
      ]
    }
  ];
  const warmupPlanScenario = {
    id: "warmup-plan",
    type: "task",
    trigger: "Customer mentioned email deliverability concerns",
    message: "Generate email warmup plan to improve sender reputation and deliverability.",
    action: {
      primary: "Generate & Send Plan",
      secondary: "Skip"
    },
    autoComplete: true,
    priority: "medium",
    context: "Email Deliverability Solution",
    conversationFlow: [
      {
        id: "warmup1",
        speaker: "csm",
        message: "I also wanted to mention - I noticed some of your emails might be hitting spam folders based on your delivery metrics. Are you experiencing any deliverability issues?",
        timestamp: "10:50",
        delay: 2e3
      },
      {
        id: "warmup2",
        speaker: "customer",
        message: "Yes, exactly! Some of our emails are going to spam and we're really concerned about it.",
        timestamp: "10:50",
        delay: 4500
      },
      {
        id: "warmup3",
        speaker: "csm",
        message: "I can help with that. Let me generate a customized email warmup plan for your domain. This will gradually improve your sender reputation.",
        timestamp: "10:51",
        delay: 7e3
      },
      {
        id: "warmup4",
        speaker: "customer",
        message: "That would be fantastic! We really need to fix this issue.",
        timestamp: "10:51",
        delay: 9500
      }
    ],
    automatedAction: {
      type: "plan",
      content: `Email Warmup Plan - 6 Week Strategy

Week 1-2: Foundation (50 emails/day)
• Send to highly engaged subscribers only
• Focus on welcome series and re-engagement
• Monitor bounce rates (<2%)

Week 3-4: Gradual Increase (200 emails/day)
• Expand to moderately engaged segments
• Include promotional content (20% max)
• Track spam complaints (<0.1%)

Week 5-6: Full Volume (500+ emails/day)
• Resume normal sending patterns
• Monitor deliverability metrics daily
• Maintain consistent sending schedule

Key Metrics to Track:
✓ Inbox placement rate (>90%)
✓ Open rates (industry benchmark)
✓ Spam complaint rate (<0.1%)
✓ Bounce rate (<2%)`,
      recipient: "sarah.chen@techflow.com",
      subject: "Custom Email Warmup Plan - TechFlow Solutions"
    }
  };
  const allSuggestionFlows = [
    ...suggestionFlows,
    warmupPlanScenario
  ];
  const meetingSummary = {
    keyPoints: [
      "Email open rates declined 23% - discussed A/B testing strategies",
      "Congratulated on $15M Series B funding round",
      "3 overdue API integration tickets causing developer frustration",
      "Planning to double marketing team and expand internationally",
      "Need email deliverability warmup plan for better sender reputation"
    ],
    actionItems: [
      "Send email template examples from similar industry companies",
      "Schedule technical deep-dive with senior engineer (Thursday)",
      "Prepare enterprise plan proposal for 5 additional seats",
      "Send customized email warmup plan",
      "Follow up on API integration ticket resolution"
    ],
    nextSteps: [
      "Technical support session scheduled for Thursday 2 PM",
      "Enterprise proposal to be sent by tomorrow",
      "Email warmup plan implementation to begin next week",
      "Monthly check-in scheduled for progress review"
    ],
    attendees: ["Sarah Chen (TechFlow Solutions)", "You (CSM)"],
    duration: "45 minutes"
  };
  useEffect(() => {
    if (!isListening || currentSuggestionIndex >= allSuggestionFlows.length || meetingEnded) return;
    const currentSuggestion = allSuggestionFlows[currentSuggestionIndex];
    const suggestionTimeout = setTimeout(() => {
      setActiveSuggestions([currentSuggestion]);
    }, 1500);
    if (currentSuggestion.conversationFlow) {
      currentSuggestion.conversationFlow.forEach((message) => {
        setTimeout(() => {
          setConversationMessages((prev) => {
            if (prev.some((m) => m.id === message.id)) return prev;
            return [...prev, message];
          });
        }, message.delay);
      });
      const lastMessage = currentSuggestion.conversationFlow[currentSuggestion.conversationFlow.length - 1];
      setTimeout(() => {
        const completionMessage = getTaskCompletionMessage(currentSuggestion);
        setCompletedTasks((prev) => [...prev, completionMessage]);
        if (currentSuggestion.automatedAction) {
          setTimeout(() => {
            handleAutomatedAction(currentSuggestion);
          }, 1500);
        }
        setTimeout(() => {
          setCurrentSuggestionIndex((prevIndex) => {
            if (prevIndex === currentSuggestionIndex) {
              setCompletedTasks([]);
              setConversationMessages([]);
              setAutomatedActions([]);
              const nextIndex = prevIndex + 1;
              if (nextIndex >= allSuggestionFlows.length) {
                setTimeout(() => {
                  setMeetingEnded(true);
                  setShowMeetingSummary(true);
                }, 2e3);
              }
              return nextIndex;
            }
            return prevIndex;
          });
        }, 4e3);
      }, lastMessage.delay + 3e3);
    }
    return () => {
      clearTimeout(suggestionTimeout);
    };
  }, [currentSuggestionIndex, isListening, meetingEnded]);
  const handleAutomatedAction = (suggestion) => {
    if (!suggestion.automatedAction) return;
    const { type, content, recipient, subject } = suggestion.automatedAction;
    switch (type) {
      case "calendar":
        setAutomatedActions((prev) => [...prev, `📅 Calendar invite sent to ${recipient}: "${subject}"`]);
        break;
      case "plan":
        setAutomatedActions((prev) => [...prev, `📋 Generated plan ready to send via email`]);
        break;
      case "email":
        setAutomatedActions((prev) => [...prev, `📧 Email drafted: "${subject}"`]);
        break;
    }
  };
  const handleSuggestionAction = (suggestionId, actionType) => {
    const suggestion = activeSuggestions.find((s) => s.id === suggestionId);
    if (!suggestion) return;
    if (actionType === "primary" && suggestion.autoComplete) {
      const completionMessage = getTaskCompletionMessage(suggestion);
      setCompletedTasks((prev) => [...prev, completionMessage]);
      if (suggestion.automatedAction) {
        handleAutomatedAction(suggestion);
      }
    }
    setActiveSuggestions((prev) => prev.filter((s) => s.id !== suggestionId));
  };
  const getTaskCompletionMessage = (suggestion) => {
    switch (suggestion.id) {
      case "email-decline":
        return "✅ Shared email insights and A/B testing recommendations";
      case "funding-congratulate":
        return "✅ Congratulated on Series B funding and discussed expansion";
      case "integration-issue":
        return "✅ Addressed API issues and scheduled technical support call";
      case "expansion-task":
        return "✅ Discussed seat expansion and training for new team";
      case "warmup-plan":
        return "✅ Generated custom email warmup plan for better deliverability";
      default:
        return "✅ Task completed successfully";
    }
  };
  const dismissSuggestion = (suggestionId) => {
    setActiveSuggestions((prev) => prev.filter((s) => s.id !== suggestionId));
  };
  const sendMeetingSummary = () => {
    setAutomatedActions((prev) => [...prev, `📧 Meeting summary sent to sarah.chen@techflow.com`]);
    setShowMeetingSummary(false);
  };
  const getSuggestionIcon = (type) => {
    switch (type) {
      case "task":
        return /* @__PURE__ */ jsx(CircleCheck, { className: "w-4 h-4" });
      case "insight":
        return /* @__PURE__ */ jsx(TrendingDown, { className: "w-4 h-4" });
      case "opportunity":
        return /* @__PURE__ */ jsx(DollarSign, { className: "w-4 h-4" });
      case "alert":
        return /* @__PURE__ */ jsx(TriangleAlert, { className: "w-4 h-4" });
      default:
        return /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4" });
    }
  };
  const getSuggestionIconBg = (type, priority) => {
    if (priority === "high") {
      return "bg-red-400/20 text-red-300";
    }
    switch (type) {
      case "task":
        return "bg-blue-400/20 text-blue-300";
      case "insight":
        return "bg-orange-400/20 text-orange-300";
      case "opportunity":
        return "bg-green-400/20 text-green-300";
      case "alert":
        return "bg-red-400/20 text-red-300";
      default:
        return "bg-gray-400/20 text-gray-300";
    }
  };
  const resetDemo = () => {
    setCurrentSuggestionIndex(0);
    setActiveSuggestions([]);
    setCompletedTasks([]);
    setConversationMessages([]);
    setAutomatedActions([]);
    setShowMeetingSummary(false);
    setMeetingEnded(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-900 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, nofollow" }),
      /* @__PURE__ */ jsx("title", { children: "Meeting Agent Demo - RetainSure" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Interactive demo of RetainSure's AI Meeting Agent. See real-time smart suggestions and automated actions during customer success meetings." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/interactive-demo/meeting-agent" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full h-screen", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 h-full p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative bg-gray-800 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-white text-4xl font-semibold", children: "SC" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-medium", children: "Sarah Chen" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "TechFlow Solutions" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm", children: "Sarah Chen" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative bg-gray-800 rounded-lg overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-white text-4xl font-semibold", children: "ME" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-white text-xl font-medium", children: "You (CSM)" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Customer Success Manager" })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsx("span", { className: "bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm", children: "You" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-gray-800 p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-4", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsMuted(!isMuted),
            className: `p-3 rounded-full ${isMuted ? "bg-red-500 hover:bg-red-600" : "bg-gray-600 hover:bg-gray-700"} text-white transition-colors`,
            children: isMuted ? /* @__PURE__ */ jsx(MicOff, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Mic, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsVideoOff(!isVideoOff),
            className: `p-3 rounded-full ${isVideoOff ? "bg-red-500 hover:bg-red-600" : "bg-gray-600 hover:bg-gray-700"} text-white transition-colors`,
            children: isVideoOff ? /* @__PURE__ */ jsx(VideoOff, { className: "w-6 h-6" }) : /* @__PURE__ */ jsx(Video, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx("button", { className: "p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-colors", children: /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsx("button", { className: "p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors", children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsx("button", { className: "p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors", children: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsx("button", { className: "p-3 rounded-full bg-gray-600 hover:bg-gray-700 text-white transition-colors", children: /* @__PURE__ */ jsx(Settings$1, { className: "w-6 h-6" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 flex items-center space-x-2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full", children: [
      /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full ${isListening ? "bg-green-400 animate-pulse" : "bg-gray-400"}` }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
        "Meeting Agent ",
        isListening ? "Listening" : "Paused"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 space-y-3 w-96 z-10", children: activeSuggestions.map((suggestion, index) => {
      var _a2;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl animate-slide-in-down",
          style: {
            animationDelay: `${index * 100}ms`,
            animationFillMode: "both"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 pb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("div", { className: `p-2 rounded-full ${getSuggestionIconBg(suggestion.type, suggestion.priority)}`, children: getSuggestionIcon(suggestion.type) }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-white/90 uppercase tracking-wide", children: suggestion.context })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => dismissSuggestion(suggestion.id),
                  className: "text-white/60 hover:text-white/90 transition-colors p-1 rounded-full hover:bg-white/10",
                  children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-3 text-white/95 leading-relaxed", children: suggestion.message }),
              suggestion.id === "warmup-plan" && ((_a2 = suggestion.automatedAction) == null ? void 0 : _a2.content) && /* @__PURE__ */ jsxs("div", { className: "bg-white/20 backdrop-blur-sm rounded-xl p-3 mb-3 text-xs border border-white/10", children: [
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2 text-white/90", children: "Generated Plan:" }),
                /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap text-xs text-white/80 leading-relaxed", children: suggestion.automatedAction.content })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/70 mb-4 flex items-center space-x-2", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2 h-2 bg-blue-400 rounded-full animate-pulse" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "🎯 ",
                  suggestion.trigger
                ] })
              ] }),
              suggestion.action && /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => handleSuggestionAction(suggestion.id, "primary"),
                    className: "flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: suggestion.action.primary }),
                      suggestion.autoComplete && /* @__PURE__ */ jsx(CircleCheck, { className: "w-4 h-4" })
                    ]
                  }
                ),
                suggestion.action.secondary && /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => handleSuggestionAction(suggestion.id, "secondary"),
                    className: "px-4 py-2.5 text-sm text-white/70 hover:text-white/90 hover:bg-white/10 rounded-xl transition-all duration-300",
                    children: suggestion.action.secondary
                  }
                )
              ] })
            ] })
          ]
        },
        suggestion.id
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-80 right-4 space-y-3 w-80 z-10", children: automatedActions.slice(-3).map((action, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 text-white px-5 py-4 rounded-2xl shadow-2xl animate-slide-in-down",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-400/20 rounded-full", children: /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 text-green-300" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-white/95", children: action })
        ] })
      },
      index
    )) }),
    completedTasks.length > 0 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-40 right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/30 text-white px-6 py-4 rounded-2xl shadow-2xl animate-bounce-in z-20 max-w-md", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
      /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-400/20 rounded-full", children: /* @__PURE__ */ jsx(CircleCheck, { className: "w-5 h-5 text-green-300" }) }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: completedTasks[completedTasks.length - 1] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 left-4 z-10 max-w-md", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col space-y-2", children: conversationMessages.slice(-6).map((message, index) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "animate-slide-in-left",
        style: {
          animationDelay: `${index * 100}ms`,
          animationFillMode: "both"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400 px-2", children: message.speaker === "customer" ? "Sarah Chen" : "You (CSM)" }),
          /* @__PURE__ */ jsxs("div", { className: `relative px-4 py-3 rounded-2xl shadow-lg backdrop-blur-sm border ${message.speaker === "customer" ? "bg-white/95 text-gray-800 border-white/20 rounded-bl-sm" : "bg-blue-500/90 text-white border-blue-400/30 rounded-br-sm"}`, children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", children: message.message }),
            /* @__PURE__ */ jsx("div", { className: `text-xs mt-1 ${message.speaker === "customer" ? "text-gray-400" : "text-blue-100"}`, children: message.timestamp }),
            message.speaker === "customer" ? /* @__PURE__ */ jsx("div", { className: "absolute top-3 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white/95" }) : /* @__PURE__ */ jsx("div", { className: "absolute top-3 -left-2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-blue-500/90" })
          ] })
        ] })
      },
      message.id
    )) }) }),
    showMeetingSummary && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30", children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-gray-800", children: "Meeting Summary" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowMeetingSummary(false),
            className: "text-gray-400 hover:text-gray-600",
            children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-700 mb-2", children: "Meeting Details" }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 space-y-1", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Attendees:" }),
              " ",
              meetingSummary.attendees.join(", ")
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Duration:" }),
              " ",
              meetingSummary.duration
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-700 mb-2", children: "Key Discussion Points" }),
          /* @__PURE__ */ jsx("ul", { className: "text-sm text-gray-600 space-y-1", children: meetingSummary.keyPoints.map((point, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500 mt-1", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: point })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-700 mb-2", children: "Action Items" }),
          /* @__PURE__ */ jsx("ul", { className: "text-sm text-gray-600 space-y-1", children: meetingSummary.actionItems.map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx(CircleCheck, { className: "w-4 h-4 text-green-500 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: item })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-700 mb-2", children: "Next Steps" }),
          /* @__PURE__ */ jsx("ul", { className: "text-sm text-gray-600 space-y-1", children: meetingSummary.nextSteps.map((step, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-orange-500 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: step })
          ] }, index)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end space-x-3 mt-6 pt-4 border-t", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowMeetingSummary(false),
            className: "px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors",
            children: "Close"
          }
        ),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: sendMeetingSummary,
            className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2",
            children: [
              /* @__PURE__ */ jsx("span", { children: "Send MOM via Email" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-20 left-4 space-y-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsListening(!isListening),
            className: "text-sm hover:text-gray-300 transition-colors mr-4",
            children: [
              isListening ? "Pause" : "Resume",
              " Agent"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: resetDemo,
            className: "text-sm hover:text-gray-300 transition-colors",
            children: "Reset Demo"
          }
        ),
        meetingEnded && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setShowMeetingSummary(true),
            className: "text-sm hover:text-gray-300 transition-colors ml-4",
            children: "View Summary"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
          "Scenario ",
          currentSuggestionIndex + 1,
          " of ",
          allSuggestionFlows.length
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-32 bg-gray-600 rounded-full h-1 mt-1", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "bg-green-400 h-1 rounded-full transition-all duration-500",
            style: { width: `${(currentSuggestionIndex + 1) / allSuggestionFlows.length * 100}%` }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-down {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.3s ease-out;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.4s ease-out;
        }

        .animate-bounce-in {
          animation: bounce-in 0.6s ease-out;
        }
      ` })
  ] });
}
function FreeToolsNav({ showBackLink = false, sectionLinks }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const defaultLinks = [
    { id: "features", label: "Tools" },
    { id: "how-it-works", label: "How It Works" },
    { id: "who-its-for", label: "Who It's For" }
  ];
  const links = sectionLinks || defaultLinks;
  return /* @__PURE__ */ jsx("nav", { className: "bg-white border-b border-gray-100 sticky top-0 z-50", role: "navigation", "aria-label": "Free AI Tools navigation", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-3 sm:py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 lg:gap-6", children: [
      /* @__PURE__ */ jsx(
        Link,
        {
          to: "/",
          className: "flex items-center gap-2 hover:opacity-80 transition-opacity duration-200",
          "aria-label": "RetainSure homepage",
          children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/RetainSureFullLogo.png",
              alt: "RetainSure",
              className: "h-5 sm:h-6 w-auto"
            }
          )
        }
      ),
      showBackLink && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("span", { className: "hidden md:block w-px h-5 bg-gray-200" }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/free-customer-success-ai-tools",
            className: "hidden md:inline-flex items-center gap-1 text-sm font-medium hover:opacity-70 transition-opacity duration-200",
            style: { color: "#039143" },
            children: [
              /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }),
              "All Tools"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 lg:gap-8", children: [
      links.map((link) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scrollTo(link.id),
          className: "font-medium hover:opacity-70 transition-opacity duration-200 text-sm lg:text-base",
          style: { color: "#022610" },
          children: link.label
        },
        link.id
      )),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://tools.retainsure.com?ref=website",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 text-white font-medium px-5 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm lg:text-base",
          style: { backgroundColor: "#039143" },
          children: [
            "Try Free Tools",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-3", children: [
      showBackLink && /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/free-customer-success-ai-tools",
          className: "inline-flex items-center gap-1 text-sm font-medium",
          style: { color: "#039143" },
          children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }),
            "All Tools"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "https://tools.retainsure.com?ref=website",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-1.5 text-white font-medium px-4 py-2 rounded-lg text-sm",
          style: { backgroundColor: "#039143" },
          children: [
            "Try Free",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      )
    ] })
  ] }) }) });
}
const stats$1 = [
  { icon: Clock, label: "Save 4+ Hours Per QBR", highlight: "4+ Hours" },
  { icon: TrendingUp, label: "23% Higher Customer Retention", highlight: "23%" },
  { icon: Target, label: "35% More Upsell Opportunities", highlight: "35%" }
];
const steps$1 = [
  {
    number: "01",
    icon: Target,
    title: "Choose Your Tool",
    description: "Pick the AI micro-tool that fits your need - QBR deck generation, churn analysis, or upsell identification."
  },
  {
    number: "02",
    icon: FileText,
    title: "Input Your Data",
    description: "Paste your customer context - account details, usage metrics, support history, or any relevant data points."
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get Results",
    description: "Receive polished, actionable output in seconds. Download, share, or present - no extra formatting needed."
  }
];
const tools = [
  {
    icon: ChartBar,
    title: "QBR Deck Generator",
    description: "Input your customer data and get a polished, executive-ready QBR presentation in minutes. Includes usage trends, whats working well, whats not working well and strategic recommendations.",
    badge: "Available Now",
    available: true,
    detailPath: "/free-customer-success-ai-tools/qbr-deck-generator"
  },
  {
    icon: TrendingUp,
    title: "Upsell Analyzer",
    description: "AI scans customer usage patterns, contract data, and engagement signals to surface high-confidence upsell and cross-sell opportunities.",
    badge: "Coming Soon",
    available: false,
    detailPath: null
  },
  {
    icon: Zap,
    title: "Churn Analyzer",
    description: "Predict at-risk accounts before they churn. Get actionable retention plays based on behavioral signals, support trends, and engagement drops.",
    badge: "Coming Soon",
    available: false,
    detailPath: null
  }
];
const personas$1 = [
  { icon: Users, label: "Customer Success Managers" },
  { icon: Briefcase, label: "Account Managers" },
  { icon: Crown, label: "CS Leaders" }
];
function QbrIllustration() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 rounded-2xl opacity-20 blur-2xl",
        style: { background: "linear-gradient(135deg, #039143 0%, #027a38 100%)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-5", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 520 340",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full h-auto",
        role: "img",
        "aria-label": "Flow: Your Input to AI Engine to QBR, Churn Insights, and Upsell Insights",
        children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx("pattern", { id: "dotGrid", width: "16", height: "16", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("circle", { cx: "1", cy: "1", r: "0.6", fill: "#d1d5db" }) }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "greenGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#039143" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#027a38" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "aiGlow", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#039143", stopOpacity: "0.12" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#039143", stopOpacity: "0.02" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "churnGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#dc2626" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#b91c1c" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "upsellGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#d97706" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#b45309" })
            ] }),
            /* @__PURE__ */ jsx("filter", { id: "cardShadow", x: "-4%", y: "-4%", width: "108%", height: "112%", children: /* @__PURE__ */ jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodColor: "#000", floodOpacity: "0.08" }) })
          ] }),
          /* @__PURE__ */ jsx("rect", { width: "520", height: "340", fill: "url(#dotGrid)", rx: "8" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "20", y: "90", width: "110", height: "160", rx: "10", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#cardShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "20", y: "90", width: "110", height: "28", rx: "10", fill: "#f1f5f9" }),
            /* @__PURE__ */ jsx("rect", { x: "20", y: "108", width: "110", height: "10", fill: "#f1f5f9" }),
            /* @__PURE__ */ jsx("text", { x: "75", y: "109", textAnchor: "middle", fill: "#334155", fontSize: "9", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "YOUR INPUT" }),
            /* @__PURE__ */ jsx("rect", { x: "40", y: "130", width: "28", height: "34", rx: "3", fill: "white", stroke: "#94a3b8", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "44", y: "136", width: "14", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "44", y: "141", width: "18", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "44", y: "146", width: "12", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "44", y: "151", width: "16", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("path", { d: "M60 130 L68 130 L68 138 L60 130Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "78", y: "130", width: "34", height: "34", rx: "3", fill: "white", stroke: "#94a3b8", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("line", { x1: "78", y1: "140", x2: "112", y2: "140", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "78", y1: "148", x2: "112", y2: "148", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "78", y1: "156", x2: "112", y2: "156", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "93", y1: "130", x2: "93", y2: "164", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "82", y: "133", width: "8", height: "4", rx: "1", fill: "#039143", opacity: "0.3" }),
            /* @__PURE__ */ jsx("rect", { x: "96", y: "133", width: "8", height: "4", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "82", y: "142", width: "8", height: "4", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "96", y: "142", width: "8", height: "4", rx: "1", fill: "#039143", opacity: "0.4" }),
            /* @__PURE__ */ jsx("text", { x: "54", y: "178", textAnchor: "middle", fill: "#64748b", fontSize: "6.5", fontFamily: "system-ui, sans-serif", children: "Notes" }),
            /* @__PURE__ */ jsx("text", { x: "95", y: "178", textAnchor: "middle", fill: "#64748b", fontSize: "6.5", fontFamily: "system-ui, sans-serif", children: "CRM Data" }),
            /* @__PURE__ */ jsx("circle", { cx: "36", cy: "198", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "42", y: "196", width: "40", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("circle", { cx: "36", cy: "209", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "42", y: "207", width: "52", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("circle", { cx: "36", cy: "220", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "42", y: "218", width: "36", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("text", { x: "75", y: "240", textAnchor: "middle", fill: "#94a3b8", fontSize: "6", fontFamily: "system-ui, sans-serif", children: "Usage, tickets, goals..." })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("line", { x1: "138", y1: "170", x2: "178", y2: "170", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "176,164 186,170 176,176", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "240", cy: "170", r: "62", fill: "url(#aiGlow)", stroke: "#039143", strokeWidth: "1", strokeDasharray: "4 3", opacity: "0.7", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "62;65;62", dur: "3s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("circle", { cx: "240", cy: "170", r: "46", fill: "white", stroke: "#039143", strokeWidth: "2.5" }),
            /* @__PURE__ */ jsx("circle", { cx: "222", cy: "152", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "222", cy: "170", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "222", cy: "188", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "244", cy: "156", r: "4.5", fill: "#039143", opacity: "0.65" }),
            /* @__PURE__ */ jsx("circle", { cx: "244", cy: "175", r: "4.5", fill: "#039143", opacity: "0.65" }),
            /* @__PURE__ */ jsx("circle", { cx: "262", cy: "165", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "152", x2: "239", y2: "156", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "152", x2: "239", y2: "175", stroke: "#039143", strokeWidth: "1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "170", x2: "239", y2: "156", stroke: "#039143", strokeWidth: "1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "170", x2: "239", y2: "175", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "188", x2: "239", y2: "156", stroke: "#039143", strokeWidth: "1", opacity: "0.15" }),
            /* @__PURE__ */ jsx("line", { x1: "227", y1: "188", x2: "239", y2: "175", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "249", y1: "156", x2: "257", y2: "165", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "249", y1: "175", x2: "257", y2: "165", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsxs("circle", { cx: "262", cy: "165", r: "5", fill: "none", stroke: "#039143", strokeWidth: "1", opacity: "0", children: [
              /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "5;10;5", dur: "2s", repeatCount: "indefinite" }),
              /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;0;0.5", dur: "2s", repeatCount: "indefinite" })
            ] }),
            /* @__PURE__ */ jsx("text", { x: "240", y: "228", textAnchor: "middle", fill: "#022610", fontSize: "11", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "AI Engine" }),
            /* @__PURE__ */ jsx("text", { x: "240", y: "241", textAnchor: "middle", fill: "#6b8575", fontSize: "7", fontWeight: "500", fontFamily: "system-ui, sans-serif", children: "RetainSure" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("path", { d: "M286 158 C310 158, 310 80, 340 80", fill: "none", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "338,74 348,80 338,86", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("line", { x1: "286", y1: "170", x2: "340", y2: "170", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "338,164 348,170 338,176", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("path", { d: "M286 182 C310 182, 310 260, 340 260", fill: "none", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "338,254 348,260 338,266", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "350", y: "30", width: "150", height: "100", rx: "8", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#cardShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "30", width: "150", height: "26", rx: "8", fill: "url(#greenGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "48", width: "150", height: "8", fill: "url(#greenGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "37", width: "14", height: "14", rx: "3", fill: "white", opacity: "0.25" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "40", width: "8", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "44", width: "5", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "48", width: "7", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("text", { x: "385", y: "47", fill: "white", fontSize: "9", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "QBR Deck" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "88", width: "8", height: "20", rx: "1.5", fill: "#039143", opacity: "0.3" }),
            /* @__PURE__ */ jsx("rect", { x: "374", y: "80", width: "8", height: "28", rx: "1.5", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "386", y: "72", width: "8", height: "36", rx: "1.5", fill: "#039143", opacity: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "398", y: "66", width: "8", height: "42", rx: "1.5", fill: "#039143" }),
            /* @__PURE__ */ jsx("line", { x1: "362", y1: "108", x2: "406", y2: "108", stroke: "#e5e7eb", strokeWidth: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "420", y: "64", width: "68", height: "18", rx: "3", fill: "#edfcf2" }),
            /* @__PURE__ */ jsx("text", { x: "454", y: "76", textAnchor: "middle", fill: "#039143", fontSize: "8", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "Health: 94%" }),
            /* @__PURE__ */ jsx("rect", { x: "420", y: "86", width: "68", height: "18", rx: "3", fill: "#edfcf2" }),
            /* @__PURE__ */ jsx("text", { x: "454", y: "98", textAnchor: "middle", fill: "#039143", fontSize: "8", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "NPS: +62" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "116", width: "80", height: "3", rx: "1.5", fill: "#e5e7eb" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "122", width: "55", height: "2.5", rx: "1", fill: "#f1f5f9" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "350", y: "140", width: "150", height: "60", rx: "8", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#cardShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "140", width: "150", height: "26", rx: "8", fill: "url(#churnGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "158", width: "150", height: "8", fill: "url(#churnGrad)" }),
            /* @__PURE__ */ jsx("path", { d: "M369 38 L363 48 L375 48Z", transform: "translate(0, 104)", fill: "none", stroke: "white", strokeWidth: "1.2", opacity: "0.9" }),
            /* @__PURE__ */ jsx("line", { x1: "369", y1: "145", x2: "369", y2: "149", stroke: "white", strokeWidth: "1.2", opacity: "0.9" }),
            /* @__PURE__ */ jsx("circle", { cx: "369", cy: "151", r: "0.8", fill: "white", opacity: "0.9" }),
            /* @__PURE__ */ jsx("text", { x: "381", y: "157", fill: "white", fontSize: "9", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "Churn Insights" }),
            /* @__PURE__ */ jsx("circle", { cx: "366", cy: "178", r: "3.5", fill: "#fef2f2", stroke: "#dc2626", strokeWidth: "0.8" }),
            /* @__PURE__ */ jsx("text", { x: "366", y: "180.5", textAnchor: "middle", fill: "#dc2626", fontSize: "5", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "!" }),
            /* @__PURE__ */ jsx("rect", { x: "375", y: "176", width: "58", height: "2.5", rx: "1", fill: "#fecaca" }),
            /* @__PURE__ */ jsx("text", { x: "442", y: "180", fill: "#dc2626", fontSize: "6.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", children: "High" }),
            /* @__PURE__ */ jsx("circle", { cx: "366", cy: "190", r: "3.5", fill: "#fefce8", stroke: "#d97706", strokeWidth: "0.8" }),
            /* @__PURE__ */ jsx("text", { x: "366", y: "192.5", textAnchor: "middle", fill: "#d97706", fontSize: "5", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "~" }),
            /* @__PURE__ */ jsx("rect", { x: "375", y: "188", width: "44", height: "2.5", rx: "1", fill: "#fef3c7" }),
            /* @__PURE__ */ jsx("text", { x: "442", y: "192", fill: "#d97706", fontSize: "6.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", children: "Med" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "350", y: "210", width: "150", height: "100", rx: "8", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#cardShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "210", width: "150", height: "26", rx: "8", fill: "url(#upsellGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "228", width: "150", height: "8", fill: "url(#upsellGrad)" }),
            /* @__PURE__ */ jsx("circle", { cx: "368", cy: "223", r: "7", fill: "white", opacity: "0.25" }),
            /* @__PURE__ */ jsx("text", { x: "368", y: "227", textAnchor: "middle", fill: "white", fontSize: "10", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "$" }),
            /* @__PURE__ */ jsx("text", { x: "381", y: "227", fill: "white", fontSize: "9", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "Upsell Insights" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "244", width: "126", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fcd34d", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "249", width: "6", height: "6", rx: "1.5", fill: "#039143" }),
            /* @__PURE__ */ jsx("path", { d: "M370 252.5 L371 254 L374 250.5", fill: "none", stroke: "white", strokeWidth: "1", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "249", width: "50", height: "2.5", rx: "1", fill: "#d97706", opacity: "0.4" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "255", width: "36", height: "2", rx: "1", fill: "#fde68a" }),
            /* @__PURE__ */ jsx("text", { x: "468", y: "256", textAnchor: "middle", fill: "#d97706", fontSize: "7", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "$24K" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "274", width: "126", height: "24", rx: "4", fill: "#fffbeb", stroke: "#fcd34d", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "279", width: "6", height: "6", rx: "1.5", fill: "#039143" }),
            /* @__PURE__ */ jsx("path", { d: "M370 282.5 L371 284 L374 280.5", fill: "none", stroke: "white", strokeWidth: "1", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "279", width: "42", height: "2.5", rx: "1", fill: "#d97706", opacity: "0.4" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "285", width: "30", height: "2", rx: "1", fill: "#fde68a" }),
            /* @__PURE__ */ jsx("text", { x: "468", y: "286", textAnchor: "middle", fill: "#d97706", fontSize: "7", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "$18K" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("path", { d: "M330 46 L332 51 L337 53 L332 55 L330 60 L328 55 L323 53 L328 51Z", fill: "#039143", opacity: "0.4", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.2;0.6;0.2", dur: "2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("path", { d: "M510 140 L512 144 L516 146 L512 148 L510 152 L508 148 L504 146 L508 144Z", fill: "#039143", opacity: "0.35", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.2;0.55;0.2", dur: "2.5s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("path", { d: "M510 220 L512 224 L516 226 L512 228 L510 232 L508 228 L504 226 L508 224Z", fill: "#d97706", opacity: "0.35", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.2;0.55;0.2", dur: "2.2s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("text", { x: "75", y: "325", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 1" }),
            /* @__PURE__ */ jsx("text", { x: "240", y: "325", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 2" }),
            /* @__PURE__ */ jsx("text", { x: "425", y: "325", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 3" })
          ] })
        ]
      }
    ) })
  ] });
}
function FreeAiTools() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Free AI Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/free-customer-success-ai-tools" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/free-customer-success-ai-tools" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Free AI Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/free-customer-success-ai-tools" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Free AI Customer Success Tools | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Free AI Customer Success Tools | RetainSure",
        "description": "Free AI-powered micro tools for Customer Success teams. Generate QBR decks, identify churn risks, and uncover upsell opportunities in minutes.",
        "url": "https://retainsure.com/free-customer-success-ai-tools"
      }) })
    ] }),
    /* @__PURE__ */ jsx(FreeToolsNav, {}),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { scrollBehavior: "smooth" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]",
              style: { background: "radial-gradient(circle, #039143 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]",
              style: { background: "radial-gradient(circle, #039143 0%, transparent 70%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6",
                style: { backgroundColor: "#edfcf2", color: "#039143" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-current animate-pulse" }),
                  "Free AI-Powered Tools"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6",
                style: { color: "#022610" },
                children: [
                  "Customer Success Tools",
                  " ",
                  /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "That Deliver" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl leading-relaxed mb-8", style: { color: "#3d5a47" }, children: "Generate QBR decks, identify churn risks, and uncover upsell opportunities - all powered by AI. Built for CS teams that need results, not complexity." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://tools.retainsure.com?ref=website",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg text-base",
                  style: { backgroundColor: "#039143" },
                  children: [
                    "Get Started - Free Always",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: scrollToHowItWorks,
                  className: "inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border-2 transition-all duration-200 hover:bg-gray-50 text-base",
                  style: { color: "#022610", borderColor: "#d1d5db" },
                  children: [
                    "See How It Works",
                    /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm", style: { color: "#6b8575" }, children: "No credit card required. Work email only." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsx(QbrIllustration, {}) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "scroll-reveal", style: { backgroundColor: "#f0faf4" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-10 sm:py-14", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6", children: stats$1.map((stat) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
            style: { backgroundColor: "#ddf5e6" },
            children: /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6", style: { color: "#039143" } })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold", style: { color: "#022610" }, children: stat.label })
      ] }, stat.label)) }) }) }),
      /* @__PURE__ */ jsx("section", { id: "features", className: "scroll-reveal bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
              style: { color: "#022610" },
              children: [
                "Three AI Tools.",
                " ",
                /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Zero Complexity." })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#3d5a47" }, children: "Each tool does one thing exceptionally well so you can focus on your customers, not your software." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8", children: tools.map((tool) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:-translate-y-1",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-xl flex items-center justify-center",
                    style: { backgroundColor: "#edfcf2" },
                    children: /* @__PURE__ */ jsx(tool.icon, { className: "w-7 h-7", style: { color: "#039143" } })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-xs font-semibold px-3 py-1 rounded-full",
                    style: tool.available ? { backgroundColor: "#edfcf2", color: "#039143" } : { backgroundColor: "#f3f4f6", color: "#6b7280" },
                    children: tool.badge
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", style: { color: "#022610" }, children: tool.title }),
              /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#3d5a47" }, children: tool.description }),
              tool.available && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5 mt-6", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://tools.retainsure.com?ref=website",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70",
                    style: { color: "#039143" },
                    children: [
                      "Try it now",
                      /* @__PURE__ */ jsx("span", { className: "transition-transform duration-200 group-hover:translate-x-1", children: "→" })
                    ]
                  }
                ),
                tool.detailPath && /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: tool.detailPath,
                    className: "inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70",
                    style: { color: "#022610" },
                    children: [
                      "Learn more",
                      /* @__PURE__ */ jsx("span", { className: "transition-transform duration-200 group-hover:translate-x-1", children: "→" })
                    ]
                  }
                )
              ] })
            ]
          },
          tool.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "scroll-reveal py-20 sm:py-28", style: { backgroundColor: "#fafbfc" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
              style: { color: "#022610" },
              children: "How It Works"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#3d5a47" }, children: "Pick a tool, drop in your data, and get actionable results in seconds." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-12 relative", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "hidden md:block absolute top-16 left-[20%] right-[20%] h-px",
              style: {
                backgroundImage: "repeating-linear-gradient(to right, #039143 0, #039143 8px, transparent 8px, transparent 16px)",
                opacity: 0.3
              }
            }
          ),
          steps$1.map((step) => /* @__PURE__ */ jsx("div", { className: "relative text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center",
                  style: { backgroundColor: "#edfcf2" },
                  children: /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8", style: { color: "#039143" } })
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white",
                  style: { backgroundColor: "#039143" },
                  children: step.number
                }
              )
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", style: { color: "#022610" }, children: step.title }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-base leading-relaxed max-w-xs mx-auto",
                style: { color: "#3d5a47" },
                children: step.description
              }
            )
          ] }) }, step.number))
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "who-its-for", className: "scroll-reveal bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-6",
            style: { color: "#022610" },
            children: [
              "Built for",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Customer Success Teams" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed mb-10", style: { color: "#3d5a47" }, children: "Whether you manage 10 accounts or 100, these tools eliminate the repetitive work so you can spend time where it matters -- building relationships, driving adoption, and growing revenue." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: personas$1.map((persona) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-md hover:border-gray-300",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  style: { backgroundColor: "#edfcf2" },
                  children: /* @__PURE__ */ jsx(persona.icon, { className: "w-5 h-5", style: { color: "#039143" } })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", style: { color: "#022610" }, children: persona.label })
            ]
          },
          persona.label
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "scroll-reveal relative overflow-hidden py-20 sm:py-28", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "linear-gradient(135deg, #039143 0%, #027a38 50%, #01612b 100%)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none opacity-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full",
              style: { background: "radial-gradient(circle, white 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full",
              style: { background: "radial-gradient(circle, white 0%, transparent 70%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 text-center", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight", children: [
            "Stop spending hours on what",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
            /* @__PURE__ */ jsx("span", { className: "opacity-90", children: " AI can do in minutes" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 max-w-xl mx-auto mb-10", children: "Join CS teams already saving hours every week with AI-powered micro tools." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://tools.retainsure.com?ref=website",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base",
              style: { backgroundColor: "white", color: "#039143" },
              children: [
                "Try micro toos - free always",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-white/60", children: "No credit card required. Work email only." })
        ] })
      ] })
    ] })
  ] });
}
const stats = [
  { icon: Clock, label: "Save 4+ Hours Per QBR", highlight: "4+" },
  { icon: Target, label: "95% Insight Accuracy", highlight: "95%" },
  { icon: TrendingUp, label: "1,000+ Decks Generated", highlight: "1,000+" }
];
const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Enter Your Customer Context",
    description: "Paste key account details - Product usage, support history, renewal date. The more context, the sharper the output."
  },
  {
    number: "02",
    icon: Sparkles,
    title: "AI Generates Your Deck",
    description: "Our AI analyzes your data and produces a structured, executive-ready QBR deck with insights, trends, and recommendations."
  },
  {
    number: "03",
    icon: Download,
    title: "Download and Present",
    description: "Export your polished deck and walk into your next QBR fully prepared. Customize further or present as-is."
  }
];
const sampleSections = [
  {
    title: "Journey Till Now",
    color: "#039143",
    lines: [
      "Summary of product usage over time",
      "Key milestones and adoption trends",
      "Engagement and activity overview"
    ]
  },
  {
    title: "What Worked Well",
    color: "#0369a1",
    lines: [
      "High-impact features and workflows",
      "Goals achieved and targets met",
      "Successful initiatives and wins"
    ]
  },
  {
    title: "What Is Not Working Well",
    color: "#dc2626",
    lines: [
      "Underutilized features and gaps",
      "Declining engagement areas",
      "Unresolved pain points"
    ]
  },
  {
    title: "Actionable Recommendations",
    color: "#d97706",
    lines: [
      "Specific steps to address problem areas",
      "Strategic initiatives for long-term success",
      "Resources and support needed"
    ]
  }
];
const useCases = [
  "Quarterly Business Reviews",
  "Annual Account Reviews",
  "Mid-Cycle Check-ins",
  "Renewal Discussions",
  "Executive Sponsor Meetings",
  "Portfolio Reviews"
];
const faqs = [
  {
    q: "What data do I need to provide?",
    a: "At minimum, basic account info like Product usage metrics, and renewal date. For richer output, include support ticket history, NPS scores, customer goals, and any relevant notes. The more context you provide, the more detailed and accurate the deck."
  },
  {
    q: "How long does generation take?",
    a: "Most decks are generated in under 3 minutes. Complex accounts with extensive data may take slightly longer, but you'll always have your deck in under 5 minutes."
  },
  {
    q: "Can I customize the output?",
    a: "Yes. The generated deck gives you a strong starting point with all the analysis done. You get to export the generated presentation in pptx format and edit as yo like"
  },
  {
    q: "Is my customer data secure?",
    a: "Your data is processed securely and is never stored or used for training. We follow industry-standard encryption and data handling practices."
  },
  {
    q: "What format is the output?",
    a: "The deck is generated as a structured, formatted pptx that you can download and present directly or import into your preferred presentation tool."
  },
  {
    q: "Do I need technical skills to use this?",
    a: "Not at all. If you can paste text into a form, you can use this tool. No integrations, APIs, or technical setup required."
  }
];
const personas = [
  { icon: Users, label: "CSMs Managing Multiple Accounts" },
  { icon: Briefcase, label: "Account Managers Preparing Renewals" },
  { icon: Crown, label: "CS Leaders Overseeing Team Performance" }
];
const navSections = [
  { id: "how-it-works", label: "How It Works" },
  { id: "sample-output", label: "Sample Output" },
  { id: "faq", label: "FAQ" }
];
function QbrFlowIllustration() {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full max-w-lg", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 rounded-2xl opacity-20 blur-2xl",
        style: { background: "linear-gradient(135deg, #039143 0%, #027a38 100%)" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden p-5", children: /* @__PURE__ */ jsxs(
      "svg",
      {
        viewBox: "0 0 520 300",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-full h-auto",
        role: "img",
        "aria-label": "Flow: Customer Data to AI Engine to QBR Deck",
        children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx("pattern", { id: "qbrDotGrid", width: "16", height: "16", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("circle", { cx: "1", cy: "1", r: "0.6", fill: "#d1d5db" }) }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "qbrGreenGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#039143" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#027a38" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "qbrAiGlow", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#039143", stopOpacity: "0.12" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#039143", stopOpacity: "0.02" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "qbrBlueGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#0369a1" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#075985" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "qbrRedGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#dc2626" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#b91c1c" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "qbrAmberGrad", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#d97706" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#b45309" })
            ] }),
            /* @__PURE__ */ jsx("filter", { id: "qbrShadow", x: "-4%", y: "-4%", width: "108%", height: "112%", children: /* @__PURE__ */ jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodColor: "#000", floodOpacity: "0.08" }) })
          ] }),
          /* @__PURE__ */ jsx("rect", { width: "520", height: "300", fill: "url(#qbrDotGrid)", rx: "8" }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "14", y: "60", width: "120", height: "180", rx: "10", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#qbrShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "60", width: "120", height: "28", rx: "10", fill: "#f1f5f9" }),
            /* @__PURE__ */ jsx("rect", { x: "14", y: "78", width: "120", height: "10", fill: "#f1f5f9" }),
            /* @__PURE__ */ jsx("text", { x: "74", y: "79", textAnchor: "middle", fill: "#334155", fontSize: "9", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "CUSTOMER DATA" }),
            /* @__PURE__ */ jsx("rect", { x: "30", y: "100", width: "30", height: "36", rx: "3", fill: "white", stroke: "#94a3b8", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "106", width: "16", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "111", width: "20", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "116", width: "13", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "121", width: "18", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("rect", { x: "34", y: "126", width: "10", height: "2", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("path", { d: "M52 100 L60 100 L60 108 L52 100Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "72", y: "100", width: "46", height: "36", rx: "3", fill: "white", stroke: "#94a3b8", strokeWidth: "1" }),
            /* @__PURE__ */ jsx("line", { x1: "72", y1: "110", x2: "118", y2: "110", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "72", y1: "118", x2: "118", y2: "118", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "72", y1: "126", x2: "118", y2: "126", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("line", { x1: "90", y1: "100", x2: "90", y2: "136", stroke: "#cbd5e1", strokeWidth: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "76", y: "103", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.3" }),
            /* @__PURE__ */ jsx("rect", { x: "94", y: "103", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "76", y: "112", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.4" }),
            /* @__PURE__ */ jsx("rect", { x: "94", y: "112", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "76", y: "120", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "94", y: "120", width: "10", height: "4", rx: "1", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("text", { x: "45", y: "150", textAnchor: "middle", fill: "#64748b", fontSize: "6.5", fontFamily: "system-ui, sans-serif", children: "Notes" }),
            /* @__PURE__ */ jsx("text", { x: "95", y: "150", textAnchor: "middle", fill: "#64748b", fontSize: "6.5", fontFamily: "system-ui, sans-serif", children: "CRM Data" }),
            /* @__PURE__ */ jsx("circle", { cx: "30", cy: "168", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "36", y: "166", width: "44", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("circle", { cx: "30", cy: "179", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "36", y: "177", width: "56", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("circle", { cx: "30", cy: "190", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "36", y: "188", width: "38", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("circle", { cx: "30", cy: "201", r: "2", fill: "#039143", opacity: "0.5" }),
            /* @__PURE__ */ jsx("rect", { x: "36", y: "199", width: "48", height: "2.5", rx: "1", fill: "#cbd5e1" }),
            /* @__PURE__ */ jsx("text", { x: "74", y: "228", textAnchor: "middle", fill: "#94a3b8", fontSize: "6", fontFamily: "system-ui, sans-serif", children: "Usage, tickets, goals..." })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("line", { x1: "142", y1: "150", x2: "180", y2: "150", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "178,144 188,150 178,156", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "244", cy: "150", r: "62", fill: "url(#qbrAiGlow)", stroke: "#039143", strokeWidth: "1", strokeDasharray: "4 3", opacity: "0.7", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "62;65;62", dur: "3s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("circle", { cx: "244", cy: "150", r: "46", fill: "white", stroke: "#039143", strokeWidth: "2.5" }),
            /* @__PURE__ */ jsx("circle", { cx: "226", cy: "132", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "226", cy: "150", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "226", cy: "168", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("circle", { cx: "248", cy: "136", r: "4.5", fill: "#039143", opacity: "0.65" }),
            /* @__PURE__ */ jsx("circle", { cx: "248", cy: "155", r: "4.5", fill: "#039143", opacity: "0.65" }),
            /* @__PURE__ */ jsx("circle", { cx: "266", cy: "145", r: "5", fill: "#039143", opacity: "0.85" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "132", x2: "243", y2: "136", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "132", x2: "243", y2: "155", stroke: "#039143", strokeWidth: "1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "150", x2: "243", y2: "136", stroke: "#039143", strokeWidth: "1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "150", x2: "243", y2: "155", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "168", x2: "243", y2: "136", stroke: "#039143", strokeWidth: "1", opacity: "0.15" }),
            /* @__PURE__ */ jsx("line", { x1: "231", y1: "168", x2: "243", y2: "155", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "253", y1: "136", x2: "261", y2: "145", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsx("line", { x1: "253", y1: "155", x2: "261", y2: "145", stroke: "#039143", strokeWidth: "1", opacity: "0.3" }),
            /* @__PURE__ */ jsxs("circle", { cx: "266", cy: "145", r: "5", fill: "none", stroke: "#039143", strokeWidth: "1", opacity: "0", children: [
              /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "5;10;5", dur: "2s", repeatCount: "indefinite" }),
              /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;0;0.5", dur: "2s", repeatCount: "indefinite" })
            ] }),
            /* @__PURE__ */ jsx("text", { x: "244", y: "208", textAnchor: "middle", fill: "#022610", fontSize: "11", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "AI Engine" }),
            /* @__PURE__ */ jsx("text", { x: "244", y: "221", textAnchor: "middle", fill: "#6b8575", fontSize: "7", fontWeight: "500", fontFamily: "system-ui, sans-serif", children: "RetainSure" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("line", { x1: "290", y1: "150", x2: "340", y2: "150", stroke: "#039143", strokeWidth: "2", strokeDasharray: "6 4", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dashoffset", values: "0;-20", dur: "1.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("polygon", { points: "338,144 348,150 338,156", fill: "#039143", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.5;1;0.5", dur: "1.2s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("rect", { x: "350", y: "30", width: "156", height: "240", rx: "10", fill: "white", stroke: "#d1d5db", strokeWidth: "1.2", filter: "url(#qbrShadow)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "30", width: "156", height: "28", rx: "10", fill: "url(#qbrGreenGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "350", y: "48", width: "156", height: "10", fill: "url(#qbrGreenGrad)" }),
            /* @__PURE__ */ jsx("rect", { x: "362", y: "37", width: "14", height: "14", rx: "3", fill: "white", opacity: "0.25" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "40", width: "8", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "44", width: "5", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("rect", { x: "365", y: "48", width: "7", height: "2", rx: "1", fill: "white", opacity: "0.7" }),
            /* @__PURE__ */ jsx("text", { x: "385", y: "48", fill: "white", fontSize: "9.5", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "QBR Deck" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "68", width: "136", height: "42", rx: "5", fill: "#f0faf4", stroke: "#039143", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "68", width: "136", height: "14", rx: "5", fill: "#039143", opacity: "0.15" }),
            /* @__PURE__ */ jsx("text", { x: "368", y: "78", fill: "#039143", fontSize: "6.5", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "Journey Till Now" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "88", width: "50", height: "2", rx: "1", fill: "#039143", opacity: "0.25" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "93", width: "70", height: "2", rx: "1", fill: "#039143", opacity: "0.15" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "98", width: "40", height: "2", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "460", y: "84", width: "6", height: "16", rx: "1", fill: "#039143", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "470", y: "78", width: "6", height: "22", rx: "1", fill: "#039143", opacity: "0.35" }),
            /* @__PURE__ */ jsx("rect", { x: "480", y: "72", width: "6", height: "28", rx: "1", fill: "#039143", opacity: "0.55" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "116", width: "136", height: "42", rx: "5", fill: "#f0f9ff", stroke: "#0369a1", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "116", width: "136", height: "14", rx: "5", fill: "#0369a1", opacity: "0.15" }),
            /* @__PURE__ */ jsx("text", { x: "368", y: "126", fill: "#0369a1", fontSize: "6.5", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "What Worked Well" }),
            /* @__PURE__ */ jsx("circle", { cx: "372", cy: "137", r: "3", fill: "#dcfce7", stroke: "#039143", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("path", { d: "M370 137 L371.5 138.5 L374.5 135.5", fill: "none", stroke: "#039143", strokeWidth: "0.8", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "135", width: "50", height: "2.5", rx: "1", fill: "#0369a1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "372", cy: "148", r: "3", fill: "#dcfce7", stroke: "#039143", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("path", { d: "M370 148 L371.5 149.5 L374.5 146.5", fill: "none", stroke: "#039143", strokeWidth: "0.8", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "146", width: "62", height: "2.5", rx: "1", fill: "#0369a1", opacity: "0.2" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "164", width: "136", height: "42", rx: "5", fill: "#fef2f2", stroke: "#dc2626", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "164", width: "136", height: "14", rx: "5", fill: "#dc2626", opacity: "0.12" }),
            /* @__PURE__ */ jsx("text", { x: "368", y: "174", fill: "#dc2626", fontSize: "6.5", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "What Is Not Working" }),
            /* @__PURE__ */ jsx("circle", { cx: "372", cy: "185", r: "3.5", fill: "#fef2f2", stroke: "#dc2626", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("text", { x: "372", y: "187.5", textAnchor: "middle", fill: "#dc2626", fontSize: "5", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "!" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "183", width: "55", height: "2.5", rx: "1", fill: "#fecaca" }),
            /* @__PURE__ */ jsx("circle", { cx: "372", cy: "196", r: "3.5", fill: "#fef2f2", stroke: "#dc2626", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("text", { x: "372", y: "198.5", textAnchor: "middle", fill: "#dc2626", fontSize: "5", fontWeight: "800", fontFamily: "system-ui, sans-serif", children: "!" }),
            /* @__PURE__ */ jsx("rect", { x: "380", y: "194", width: "42", height: "2.5", rx: "1", fill: "#fecaca" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "212", width: "136", height: "48", rx: "5", fill: "#fffbeb", stroke: "#d97706", strokeWidth: "0.6" }),
            /* @__PURE__ */ jsx("rect", { x: "360", y: "212", width: "136", height: "14", rx: "5", fill: "#d97706", opacity: "0.12" }),
            /* @__PURE__ */ jsx("text", { x: "368", y: "222", fill: "#d97706", fontSize: "6.5", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "Recommendations" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "232", width: "8", height: "8", rx: "2", fill: "#d97706", opacity: "0.2" }),
            /* @__PURE__ */ jsx("text", { x: "372", y: "238.5", textAnchor: "middle", fill: "#d97706", fontSize: "6", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "1" }),
            /* @__PURE__ */ jsx("rect", { x: "382", y: "234", width: "54", height: "2.5", rx: "1", fill: "#fde68a" }),
            /* @__PURE__ */ jsx("rect", { x: "368", y: "244", width: "8", height: "8", rx: "2", fill: "#d97706", opacity: "0.2" }),
            /* @__PURE__ */ jsx("text", { x: "372", y: "250.5", textAnchor: "middle", fill: "#d97706", fontSize: "6", fontWeight: "700", fontFamily: "system-ui, sans-serif", children: "2" }),
            /* @__PURE__ */ jsx("rect", { x: "382", y: "246", width: "44", height: "2.5", rx: "1", fill: "#fde68a" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("path", { d: "M335 50 L337 55 L342 57 L337 59 L335 64 L333 59 L328 57 L333 55Z", fill: "#039143", opacity: "0.4", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.2;0.6;0.2", dur: "2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("path", { d: "M340 240 L342 244 L346 246 L342 248 L340 252 L338 248 L334 246 L338 244Z", fill: "#d97706", opacity: "0.35", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.2;0.55;0.2", dur: "2.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("path", { d: "M150 80 L152 84 L156 86 L152 88 L150 92 L148 88 L144 86 L148 84Z", fill: "#039143", opacity: "0.3", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0.15;0.45;0.15", dur: "2.8s", repeatCount: "indefinite" }) })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("text", { x: "74", y: "285", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 1" }),
            /* @__PURE__ */ jsx("text", { x: "244", y: "285", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 2" }),
            /* @__PURE__ */ jsx("text", { x: "428", y: "285", textAnchor: "middle", fill: "#94a3b8", fontSize: "7.5", fontWeight: "600", fontFamily: "system-ui, sans-serif", letterSpacing: "0.5", children: "STEP 3" })
          ] })
        ]
      }
    ) })
  ] });
}
function QbrDeckGenerator() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const scrollToSection = () => {
    const el = document.getElementById("how-it-works");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Free AI QBR Deck Generator | RetainSure" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Generate professional QBR decks in minutes with AI. Input customer data, get executive-ready presentations with usage trends, health scores, and strategic recommendations."
        }
      ),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://retainsure.com/free-customer-success-ai-tools/qbr-deck-generator" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://retainsure.com/free-customer-success-ai-tools/qbr-deck-generator" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Free AI QBR Deck Generator | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Generate professional QBR decks in minutes with AI. Input customer data, get executive-ready presentations with usage trends, health scores, and strategic recommendations." }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://retainsure.com/og-image.jpg" }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:url", content: "https://retainsure.com/free-customer-success-ai-tools/qbr-deck-generator" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:title", content: "Free AI QBR Deck Generator | RetainSure" }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:description", content: "Generate professional QBR decks in minutes with AI. Input customer data, get executive-ready presentations with usage trends, health scores, and strategic recommendations." }),
      /* @__PURE__ */ jsx("meta", { property: "twitter:image", content: "https://retainsure.com/og-image.jpg" })
    ] }),
    /* @__PURE__ */ jsx(FreeToolsNav, { sectionLinks: navSections }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white", style: { scrollBehavior: "smooth" }, children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]",
              style: { background: "radial-gradient(circle, #039143 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]",
              style: { background: "radial-gradient(circle, #039143 0%, transparent 70%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 pt-12 sm:pt-20 pb-16 sm:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6",
                style: { backgroundColor: "#edfcf2", color: "#039143" },
                children: [
                  /* @__PURE__ */ jsx(ChartBar, { className: "w-4 h-4" }),
                  "Free QBR Deck Generator"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "h1",
              {
                className: "text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight mb-6",
                style: { color: "#022610" },
                children: [
                  "Generate Professional QBR Decks",
                  " ",
                  /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "in Minutes, Not Hours" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl leading-relaxed mb-8", style: { color: "#3d5a47" }, children: "AI-powered QBR deck generator that turns customer data into executive-ready presentations. Save 4+ hours per QBR while delivering sharper insights." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://tools.retainsure.com?ref=website",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-all duration-200 hover:shadow-lg text-base",
                  style: { backgroundColor: "#039143" },
                  children: [
                    "Generate Now - Free Always",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: scrollToSection,
                  className: "inline-flex items-center justify-center gap-2 font-semibold px-7 py-3.5 rounded-xl border-2 transition-all duration-200 hover:bg-gray-50 text-base",
                  style: { color: "#022610", borderColor: "#d1d5db" },
                  children: [
                    "See How It Works",
                    /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm", style: { color: "#6b8575" }, children: "No credit card required. No signup needed. Work email only." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:flex items-center justify-center", children: /* @__PURE__ */ jsx(QbrFlowIllustration, {}) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "scroll-reveal", style: { backgroundColor: "#f0faf4" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 py-10 sm:py-14", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6", children: stats.map((stat) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
            style: { backgroundColor: "#ddf5e6" },
            children: /* @__PURE__ */ jsx(stat.icon, { className: "w-6 h-6", style: { color: "#039143" } })
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold", style: { color: "#022610" }, children: stat.label })
      ] }, stat.label)) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-reveal bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-14", children: [
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
              style: { color: "#022610" },
              children: [
                "QBR Prep Shouldn't Take",
                " ",
                /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Half Your Week" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#3d5a47" }, children: "Every quarter, CS teams spend hours gathering data, building slides, and crafting narratives. Time that could be spent on what actually moves the needle - deepening customer relationships." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto", children: [
          {
            stat: "6-8 hrs",
            label: "Average time to prep a single QBR deck manually"
          },
          {
            stat: "40%",
            label: "Of CSM time spent on repetitive reporting tasks"
          },
          {
            stat: "3x",
            label: "More accounts covered with AI-assisted preparation"
          }
        ].map((item) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-center p-6 rounded-2xl border border-gray-100",
            style: { backgroundColor: "#fafbfc" },
            children: [
              /* @__PURE__ */ jsx("p", { className: "text-3xl font-extrabold mb-2", style: { color: "#039143" }, children: item.stat }),
              /* @__PURE__ */ jsx("p", { className: "text-sm leading-relaxed", style: { color: "#3d5a47" }, children: item.label })
            ]
          },
          item.stat
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "how-it-works", className: "scroll-reveal bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
              style: { color: "#022610" },
              children: [
                "Three Steps to a",
                " ",
                /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Better QBR" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#3d5a47" }, children: "From raw customer data to a polished, executive-ready deck in under 2 minutes." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 lg:gap-12 relative", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "hidden md:block absolute top-20 left-[20%] right-[20%] h-px",
              style: {
                backgroundImage: "repeating-linear-gradient(to right, #039143 0, #039143 8px, transparent 8px, transparent 16px)",
                opacity: 0.3
              }
            }
          ),
          steps.map((step) => /* @__PURE__ */ jsx("div", { className: "relative text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "relative mb-6", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center",
                  style: { backgroundColor: "#edfcf2" },
                  children: /* @__PURE__ */ jsx(step.icon, { className: "w-8 h-8", style: { color: "#039143" } })
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white",
                  style: { backgroundColor: "#039143" },
                  children: step.number
                }
              )
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", style: { color: "#022610" }, children: step.title }),
            /* @__PURE__ */ jsx(
              "p",
              {
                className: "text-base leading-relaxed max-w-xs mx-auto mb-5",
                style: { color: "#3d5a47" },
                children: step.description
              }
            )
          ] }) }, step.number))
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "sample-output", className: "scroll-reveal py-20 sm:py-28", style: { backgroundColor: "#fafbfc" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
          /* @__PURE__ */ jsxs(
            "h2",
            {
              className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
              style: { color: "#022610" },
              children: [
                "What Your Deck",
                " ",
                /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Looks Like" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-lg", style: { color: "#3d5a47" }, children: "Each generated QBR deck includes these core sections, tailored to your specific customer data." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto", children: sampleSections.map((section) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg",
            children: [
              /* @__PURE__ */ jsx("div", { className: "px-6 py-4", style: { backgroundColor: section.color }, children: /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-base", children: section.title }) }),
              /* @__PURE__ */ jsx("div", { className: "p-6 space-y-3", children: section.lines.map((line) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0",
                    style: { backgroundColor: section.color, opacity: 0.5 }
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm", style: { color: "#3d5a47" }, children: line })
              ] }, line)) })
            ]
          },
          section.title
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "scroll-reveal bg-white py-20 sm:py-28", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-6",
            style: { color: "#022610" },
            children: [
              "Perfect For",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Every Customer Meeting" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-12", children: useCases.map((useCase) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 transition-all duration-200 hover:shadow-md hover:border-gray-300",
            style: { color: "#022610", backgroundColor: "#fafbfc" },
            children: useCase
          },
          useCase
        )) }),
        /* @__PURE__ */ jsxs(
          "h3",
          {
            className: "text-2xl font-bold mb-6",
            style: { color: "#022610" },
            children: [
              "Built for",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Customer Success Teams" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4", children: personas.map((persona) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "inline-flex items-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 bg-white transition-all duration-200 hover:shadow-md hover:border-gray-300",
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                  style: { backgroundColor: "#edfcf2" },
                  children: /* @__PURE__ */ jsx(persona.icon, { className: "w-5 h-5", style: { color: "#039143" } })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", style: { color: "#022610" }, children: persona.label })
            ]
          },
          persona.label
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "faq", className: "scroll-reveal py-20 sm:py-28", style: { backgroundColor: "#fafbfc" }, children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center max-w-2xl mx-auto mb-14", children: /* @__PURE__ */ jsxs(
          "h2",
          {
            className: "text-3xl sm:text-4xl font-extrabold tracking-tight mb-4",
            style: { color: "#022610" },
            children: [
              "Frequently Asked",
              " ",
              /* @__PURE__ */ jsx("span", { style: { color: "#039143" }, children: "Questions" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqs.map((faq) => /* @__PURE__ */ jsxs(
          "details",
          {
            className: "group rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:border-gray-300",
            children: [
              /* @__PURE__ */ jsxs(
                "summary",
                {
                  className: "flex items-center justify-between px-6 py-5 cursor-pointer list-none select-none",
                  style: { color: "#022610" },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-base pr-4", children: faq.q }),
                    /* @__PURE__ */ jsx(ChevronDown, { className: "w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180", style: { color: "#039143" } })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "px-6 pb-5", children: /* @__PURE__ */ jsx("p", { className: "text-base leading-relaxed", style: { color: "#3d5a47" }, children: faq.a }) })
            ]
          },
          faq.q
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "scroll-reveal relative overflow-hidden py-20 sm:py-28", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: { background: "linear-gradient(135deg, #039143 0%, #027a38 50%, #01612b 100%)" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none opacity-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full",
              style: { background: "radial-gradient(circle, white 0%, transparent 70%)" }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full",
              style: { background: "radial-gradient(circle, white 0%, transparent 70%)" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 container mx-auto px-4 sm:px-6 text-center", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight", children: [
            "Your Next QBR Deck is",
            /* @__PURE__ */ jsx("br", { className: "hidden sm:block" }),
            /* @__PURE__ */ jsx("span", { className: "opacity-90", children: " 2 Minutes Away." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-white/80 max-w-xl mx-auto mb-10", children: "Stop spending hours on slide decks. Let AI handle the heavy lifting so you can focus on the conversation that matters." }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://tools.retainsure.com?ref=website",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 text-base",
              style: { backgroundColor: "white", color: "#039143" },
              children: [
                "Generate Your QBR Deck - Free",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-5 text-sm text-white/60", children: "No credit card required. Work email only." })
        ] })
      ] })
    ] })
  ] });
}
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
function App() {
  const location = useLocation();
  const isDemoPage = location.pathname.startsWith("/interactive-demo/");
  const isFreeToolsPage = location.pathname.startsWith("/free-customer-success-ai-tools");
  const hideNav = isDemoPage || isFreeToolsPage;
  const hideAll = isDemoPage;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !hideAll && /* @__PURE__ */ jsx(ScrollToTop, {}),
    !hideNav && /* @__PURE__ */ jsx(Navigation, {}),
    /* @__PURE__ */ jsxs(Routes, { children: [
      /* @__PURE__ */ jsx(Route$1, { path: "/", element: /* @__PURE__ */ jsx(HomePage, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/features", element: /* @__PURE__ */ jsx(Features, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/case-studies", element: /* @__PURE__ */ jsx(CaseStudies, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/pricing", element: /* @__PURE__ */ jsx(Pricing, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/contact-us", element: /* @__PURE__ */ jsx(ContactUs, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/book-a-demo", element: /* @__PURE__ */ jsx(BookDemo, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/terms-of-service", element: /* @__PURE__ */ jsx(TermsOfService, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/privacy-policy", element: /* @__PURE__ */ jsx(PrivacyPolicy, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/data-processing-agreement", element: /* @__PURE__ */ jsx(DataProcessingAgreement, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/interactive-demo", element: /* @__PURE__ */ jsx(InteractiveDemo, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/interactive-demo/copilot-agent", element: /* @__PURE__ */ jsx(ProtectedDemoRoute, { children: /* @__PURE__ */ jsx(CopilotAgentDemo, {}) }) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/interactive-demo/product-adoption-agent", element: /* @__PURE__ */ jsx(ProtectedDemoRoute, { children: /* @__PURE__ */ jsx(ProductAdoptionDemo, {}) }) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/interactive-demo/meeting-agent", element: /* @__PURE__ */ jsx(ProtectedDemoRoute, { children: /* @__PURE__ */ jsx(MeetingAgent, {}) }) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/free-customer-success-ai-tools", element: /* @__PURE__ */ jsx(FreeAiTools, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "/free-customer-success-ai-tools/qbr-deck-generator", element: /* @__PURE__ */ jsx(QbrDeckGenerator, {}) }),
      /* @__PURE__ */ jsx(Route$1, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
    ] }),
    !hideAll && /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CookieBanner, {})
  ] });
}
function render(url) {
  const helmetContext = {};
  const html = renderToString(
    /* @__PURE__ */ jsx(HelmetProvider, { context: helmetContext, children: /* @__PURE__ */ jsx(StaticRouter, { location: url, children: /* @__PURE__ */ jsx(DemoAccessProvider, { children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
  return {
    html,
    helmet: helmetContext.helmet
  };
}
export {
  render
};
