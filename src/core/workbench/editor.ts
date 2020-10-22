import { ITab } from 'mo/components/tabs';

export enum EditorEvent {
    OpenTab = 'editor.openTab',
    CloseTab = 'editor.close',
}

export interface IEditorGroup<E = any> {
    id: number;
    activeTab: ITab;
    tabs: ITab[];
    breadcrumb: any[];
    actions: any[];
    menu: any[];
    editorInstance?: E | null;
}

export interface IEditor<T = any> {
    current: IEditorGroup | undefined;
    groups: IEditorGroup [];
    /**
     * Open a new tab in indicated group instance
     * @param tab Tab data
     * @param groupId group ID
     */
    open: (tab: ITab<T>, groupId?: number) => void;
    close?: (index: number, callback: () => void) => void;
    closeAll?: () => void;
    onClose?: () => void;
    render?:() => React.ReactElement;
}