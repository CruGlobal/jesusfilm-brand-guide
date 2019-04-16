import CMS from 'netlify-cms'

import WorkPagePreview from './preview-templates/WorkPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('work', WorkPagePreview)
