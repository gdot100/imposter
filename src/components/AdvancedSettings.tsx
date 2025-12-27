import { useState } from 'react'

interface WordData {
    word: string;
    no: number;
    valence: { mean: number; sd: number };
    arousal: { mean: number; sd: number };
    dominance: { mean: number; sd: number };
    word_frequency: string | number;
    hint_word: string;
}

interface AdvancedSettingsProps {
    onClose: () => void;
    turnMode: 'clockwise' | 'counter-clockwise' | 'random' | 'none';
    onTurnModeChange: (mode: 'clockwise' | 'counter-clockwise' | 'random' | 'none') => void;
    dontRepeat: boolean;
    onDontRepeatChange: (value: boolean) => void;
    history: string[];
    onClearHistory: () => void;
    onRemoveHistoryItem: (index: number) => void;
    customWords: WordData[];
    onCustomWordsChange: (words: WordData[]) => void;
    onRestoreDefaults: () => void;
}

export default function AdvancedSettings({
    onClose,
    turnMode,
    onTurnModeChange,
    dontRepeat,
    onDontRepeatChange,
    history,
    onClearHistory,
    onRemoveHistoryItem,
    customWords,
    onCustomWordsChange,
    onRestoreDefaults
}: AdvancedSettingsProps) {
    const [activeTab, setActiveTab] = useState<'general' | 'history' | 'words'>('general');
    const [newWord, setNewWord] = useState('');
    const [newHint, setNewHint] = useState('');

    const handleAddWord = () => {
        if (newWord.trim() && newHint.trim()) {
            const wordObj: WordData = {
                word: newWord.trim(),
                no: Date.now(),
                valence: { mean: 5, sd: 0 },
                arousal: { mean: 5, sd: 0 },
                dominance: { mean: 5, sd: 0 },
                word_frequency: 0,
                hint_word: newHint.trim()
            };
            onCustomWordsChange([...customWords, wordObj]);
            setNewWord('');
            setNewHint('');
        }
    };

    const handleDeleteWord = (index: number) => {
        const updated = [...customWords];
        updated.splice(index, 1);
        onCustomWordsChange(updated);
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-2xl h-[90vh] flex flex-col overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b flex items-center justify-between bg-blue-500 text-white">
                    <h2 className="text-2xl font-bold uppercase tracking-tight">Advanced Settings</h2>
                    <button onClick={onClose} className="p-2 hover:bg-blue-600 rounded-full transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b">
                    {(['general', 'history', 'words'] as const).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-1 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${activeTab === tab ? 'text-blue-600 border-b-4 border-blue-600' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {activeTab === 'general' && (
                        <div className="space-y-6">
                            <section>
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Turn Order Display</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {(['clockwise', 'counter-clockwise', 'random', 'none'] as const).map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => onTurnModeChange(mode)}
                                            className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all ${turnMode === mode
                                                ? 'bg-blue-500 text-white shadow-md'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {mode === 'none' ? "Don't Show" : mode.replace('-', ' ')}
                                        </button>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                                    <div>
                                        <h3 className="text-gray-800 font-bold">Don't Repeat Words</h3>
                                        <p className="text-gray-500 text-sm">Prioritize unused words until all are played</p>
                                    </div>
                                    <button
                                        onClick={() => onDontRepeatChange(!dontRepeat)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${dontRepeat ? 'bg-blue-500' : 'bg-gray-300'
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${dontRepeat ? 'translate-x-6' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </section>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Usage History ({history.length})</h3>
                                <button
                                    onClick={onClearHistory}
                                    className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline"
                                >
                                    Clear All
                                </button>
                            </div>
                            <div className="space-y-2">
                                {history.map((word, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                        <span className="font-semibold text-gray-700">{word}</span>
                                        <button
                                            onClick={() => onRemoveHistoryItem(idx)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                                {history.length === 0 && (
                                    <p className="text-gray-500 text-center py-8">No history yet</p>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'words' && (
                        <div className="space-y-6">
                            <section className="bg-blue-50 p-4 rounded-2xl space-y-3">
                                <h3 className="text-blue-800 font-bold">Add Custom Word</h3>
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Word"
                                        value={newWord}
                                        onChange={(e) => setNewWord(e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-blue-100 focus:border-blue-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Hint category (e.g. Animal, Food)"
                                        value={newHint}
                                        onChange={(e) => setNewHint(e.target.value)}
                                        className="w-full px-4 py-2 rounded-xl border-2 border-blue-100 focus:border-blue-500 outline-none"
                                    />
                                    <button
                                        onClick={handleAddWord}
                                        className="w-full py-2 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 transition-colors"
                                    >
                                        Add Word
                                    </button>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest">Word List ({customWords.length})</h3>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => onCustomWordsChange([])}
                                            className="text-red-500 text-xs font-bold uppercase tracking-widest hover:underline"
                                        >
                                            Clear All
                                        </button>
                                        <button
                                            onClick={onRestoreDefaults}
                                            className="text-blue-500 text-xs font-bold uppercase tracking-widest hover:underline"
                                        >
                                            Restore Defaults
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    {customWords.map((w, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-transparent hover:border-gray-200 transition-colors">
                                            <div>
                                                <p className="font-bold text-gray-800">{w.word}</p>
                                                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Hint: {w.hint_word}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteWord(idx)}
                                                className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
