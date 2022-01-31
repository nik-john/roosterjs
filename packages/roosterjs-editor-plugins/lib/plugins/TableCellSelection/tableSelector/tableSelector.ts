import createTableSelector from './createTableSelector';
import Disposable from 'roosterjs-editor-plugins/lib/pluginUtils/Disposable';
import { clearSelectedTableCells } from '../utils/clearSelectedTableCells';
import { IEditor } from 'roosterjs-editor-types';
// import TableEditFeature, { disposeTableEditFeature } from './TableEditorFeature';

type TableEditFeature = {
    div: HTMLDivElement;
    featureHandler: Disposable;
};

/**
 * @internal
 */
export default class TableSelector {
    private tableSelector: TableEditFeature;

    constructor(
        private editor: IEditor,
        public readonly table: HTMLTableElement,
        private onChanged: () => void
    ) {
        const sizeTransformer = editor.getSizeTransformer();
        this.tableSelector = createTableSelector(table, sizeTransformer, this.onFinishDragging);
    }

    dispose() {
        this.disposeTableSelector();
    }

    private disposeTableSelector() {
        if (this.tableSelector) {
            this.tableSelector.div.parentNode?.removeChild(this.tableSelector.div);
            this.tableSelector.div = null;
            this.tableSelector.featureHandler.dispose();
            this.tableSelector.featureHandler = null;
            this.tableSelector = null;
        }
    }

    private onFinishDragging = (): void => {
        clearSelectedTableCells(this.editor);
        this.editor.focus();
        this.onChanged();
    };
}