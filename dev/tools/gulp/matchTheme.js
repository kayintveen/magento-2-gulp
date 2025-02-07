/**
 * Absolute Web Services Intellectual Property
 *
 * @category     {development/deployment}
 * @copyright    Copyright © 1999-2020 Absolute Web Services, Inc. (http://www.absolutewebservices.com)
 * @author       Absolute Web Services
 * @license      http://www.absolutewebservices.com/license-agreement/  Single domain license
 * @terms of use http://www.absolutewebservices.com/terms-of-use/
 */

const themesConfig = require('../grunt/configs/themes');

const packages = Object.keys(themesConfig);

module.exports = {
    packages: packages,
    avaliablePackages: packages.join(', '),
    matchTheme: true
};
