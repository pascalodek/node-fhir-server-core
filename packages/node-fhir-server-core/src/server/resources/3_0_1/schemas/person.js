/**
 * @name exports
 * @summary Person Class
 */
module.exports = class Person {
  constructor(opts) {
    // Create an object to store all props
    Object.defineProperty(this, '__data', { value: {} });

    // Define getters and setters as enumerable

    Object.defineProperty(this, '_id', {
      enumerable: true,
      get: () => this.__data._id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._id = new Element(value);
      },
    });

    Object.defineProperty(this, 'id', {
      enumerable: true,
      get: () => this.__data.id,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.id = value;
      },
    });

    Object.defineProperty(this, 'meta', {
      enumerable: true,
      get: () => this.__data.meta,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Meta = require('./meta.js');
        this.__data.meta = new Meta(value);
      },
    });

    Object.defineProperty(this, '_implicitRules', {
      enumerable: true,
      get: () => this.__data._implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._implicitRules = new Element(value);
      },
    });

    Object.defineProperty(this, 'implicitRules', {
      enumerable: true,
      get: () => this.__data.implicitRules,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.implicitRules = value;
      },
    });

    Object.defineProperty(this, '_language', {
      enumerable: true,
      get: () => this.__data._language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._language = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/languages
    Object.defineProperty(this, 'language', {
      enumerable: true,
      get: () => this.__data.language,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.language = value;
      },
    });

    Object.defineProperty(this, 'text', {
      enumerable: true,
      get: () => this.__data.text,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Narrative = require('./narrative.js');
        this.__data.text = new Narrative(value);
      },
    });

    Object.defineProperty(this, 'contained', {
      enumerable: true,
      get: () => this.__data.contained,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.contained = Array.isArray(value) ? value.map((v) => v) : [value];
      },
    });

    Object.defineProperty(this, 'extension', {
      enumerable: true,
      get: () => this.__data.extension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.extension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'modifierExtension', {
      enumerable: true,
      get: () => this.__data.modifierExtension,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Extension = require('./extension.js');
        this.__data.modifierExtension = Array.isArray(value)
          ? value.map((v) => new Extension(v))
          : [new Extension(value)];
      },
    });

    Object.defineProperty(this, 'identifier', {
      enumerable: true,
      get: () => this.__data.identifier,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Identifier = require('./identifier.js');
        this.__data.identifier = Array.isArray(value)
          ? value.map((v) => new Identifier(v))
          : [new Identifier(value)];
      },
    });

    Object.defineProperty(this, 'name', {
      enumerable: true,
      get: () => this.__data.name,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let HumanName = require('./humanname.js');
        this.__data.name = Array.isArray(value)
          ? value.map((v) => new HumanName(v))
          : [new HumanName(value)];
      },
    });

    Object.defineProperty(this, 'telecom', {
      enumerable: true,
      get: () => this.__data.telecom,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let ContactPoint = require('./contactpoint.js');
        this.__data.telecom = Array.isArray(value)
          ? value.map((v) => new ContactPoint(v))
          : [new ContactPoint(value)];
      },
    });

    Object.defineProperty(this, '_gender', {
      enumerable: true,
      get: () => this.__data._gender,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._gender = new Element(value);
      },
    });
    // valueSetReference: http://hl7.org/fhir/ValueSet/administrative-gender
    Object.defineProperty(this, 'gender', {
      enumerable: true,
      get: () => this.__data.gender,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.gender = value;
      },
    });

    Object.defineProperty(this, '_birthDate', {
      enumerable: true,
      get: () => this.__data._birthDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._birthDate = new Element(value);
      },
    });

    Object.defineProperty(this, 'birthDate', {
      enumerable: true,
      get: () => this.__data.birthDate,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.birthDate = value;
      },
    });

    Object.defineProperty(this, 'address', {
      enumerable: true,
      get: () => this.__data.address,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Address = require('./address.js');
        this.__data.address = Array.isArray(value)
          ? value.map((v) => new Address(v))
          : [new Address(value)];
      },
    });

    Object.defineProperty(this, 'photo', {
      enumerable: true,
      get: () => this.__data.photo,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Attachment = require('./attachment.js');
        this.__data.photo = new Attachment(value);
      },
    });

    Object.defineProperty(this, 'managingOrganization', {
      enumerable: true,
      get: () => this.__data.managingOrganization,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Reference = require('./reference.js');
        this.__data.managingOrganization = new Reference(value);
      },
    });

    Object.defineProperty(this, '_active', {
      enumerable: true,
      get: () => this.__data._active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let Element = require('./element.js');
        this.__data._active = new Element(value);
      },
    });

    Object.defineProperty(this, 'active', {
      enumerable: true,
      get: () => this.__data.active,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        this.__data.active = value;
      },
    });

    Object.defineProperty(this, 'link', {
      enumerable: true,
      get: () => this.__data.link,
      set: (value) => {
        if (value === undefined || value === null) {
          return;
        }

        let PersonLink = require('./personlink.js');
        this.__data.link = Array.isArray(value)
          ? value.map((v) => new PersonLink(v))
          : [new PersonLink(value)];
      },
    });

    // Merge in any defaults
    Object.assign(this, opts);

    // Define a default non-writable resourceType property
    Object.defineProperty(this, 'resourceType', {
      value: 'Person',
      enumerable: true,
      writable: false,
    });
  }

  static get resourceType() {
    return 'Person';
  }

  toJSON() {
    return {
      resourceType: this.resourceType,
      id: this.id,
      meta: this.meta && this.meta.toJSON(),
      _implicitRules: this._implicitRules && this._implicitRules.toJSON(),
      implicitRules: this.implicitRules,
      _language: this._language && this._language.toJSON(),
      language: this.language,
      text: this.text && this.text.toJSON(),
      contained: this.contained,
      extension: this.extension && this.extension.map((v) => v.toJSON()),
      modifierExtension: this.modifierExtension && this.modifierExtension.map((v) => v.toJSON()),
      identifier: this.identifier && this.identifier.map((v) => v.toJSON()),
      name: this.name && this.name.map((v) => v.toJSON()),
      telecom: this.telecom && this.telecom.map((v) => v.toJSON()),
      _gender: this._gender && this._gender.toJSON(),
      gender: this.gender,
      _birthDate: this._birthDate && this._birthDate.toJSON(),
      birthDate: this.birthDate,
      address: this.address && this.address.map((v) => v.toJSON()),
      photo: this.photo && this.photo.toJSON(),
      managingOrganization: this.managingOrganization && this.managingOrganization.toJSON(),
      _active: this._active && this._active.toJSON(),
      active: this.active,
      link: this.link && this.link.map((v) => v.toJSON()),
    };
  }
};
