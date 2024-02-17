const combineClassNames = (...classNames: any[]) =>
  classNames.filter(Boolean).join(" ");

export { combineClassNames };
