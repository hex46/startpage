import './jsonEditor.scss'
import '../../../node_modules/remixicon/fonts/remixicon.css'

import JsonEditorController from './JsonEditorController'
import JsonEditorView from './JsonEditorView'
import JsonEditorModel from './JsonEditorModel'

const jsonView = new JsonEditorView()
const jsonModel = new JsonEditorModel()
const jsonController = new JsonEditorController('/json', jsonView, jsonModel)

jsonController.asGlobalVariable('jsonController')
