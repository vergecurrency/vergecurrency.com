module.exports = class SemanticReleaseError extends Error {
  constructor(message, code) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    this.name = this.constructor.name;
    this.code = code;
    this.semanticRelease = true;
  }
};
