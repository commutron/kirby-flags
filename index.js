panel.plugin("kommutron/flags", {
	fields: {
		likes: {
			props: {
				label: String,
				help: String,
				value: String
			},
			methods: {
				clearLikes() {
					this.$store.dispatch("content/update", ["likes", ""]);
					// this.$store.dispatch("content/save"); // could auto save but not for now
				},
				likeCount(val) {
					var likes = val ? val.split(';').length - 1 : 0;
					return likes;
				}
			},
			template: `
			<k-field icon="heart" class="k-number-field" :label="label" :help="help">
				<k-input 
					icon="heart" theme="field" 
					type="text" disabled="true" 
					name="textfield" :value="likeCount(value)" />
				<k-button theme="negative" alt="Clear" @click="clearLikes">Clear</k-button>
			</k-field>
			`
		},
		strikes: {
			props: {
				label: String,
				help: String,
				value: String
			},
			methods: {
				clearStrikes() {
					this.$store.dispatch("content/update", ["strikes", ""]);
					// this.$store.dispatch("content/save");
				},
				strikeCount(val) {
					var strikes = val ? val.split(';').length - 1 : 0;
					return strikes;
				}
			},
			template: `
			<k-field class="k-flags-field" :label="label" :help="help">
				<k-input 
					icon="remove" theme="field" 
					type="text" disabled="true" 
					name="textfield" :value="strikeCount(value)" />
				<k-button theme="negative" alt="Clear" @click="clearStrikes">Clear</k-button>
			</k-field>
			`
		},
		bells: {
			props: {
				label: String,
				help: String,
				value: String
			},
			methods: {
				clearBells() {
					this.$store.dispatch("content/update", ["bells", ""]);
					// this.$store.dispatch("content/save");
				},
				bellCount(val) {
					var bells = val ? val.split(';').length - 1 : 0;
					return bells;
				}
			},
			template: `
			<k-field class="k-flags-field" :label="label" :help="help">
				<k-input 
					icon="bell" theme="field" 
					type="text" disabled="true"
					 name="textfield" :value="bellCount(value)" />
				<k-button theme="negative" alt="Clear" @click="clearBells">Clear</k-button>
			</k-field>
			`
		},
		edits: {
			props: {
				label: String,
				help: String,
				value: String
			},
			methods: {
				clearEdits() {
					this.$store.dispatch("content/update", ["edits", ""]);
					// this.$store.dispatch("content/save");
				},
				editCount(val) {
					var edits = val ? val.split(';').length - 1 : 0;
					return edits;
				}
			},
			template: `
			<k-field class="k-flags-field" :label="label" :help="help">
				<k-input 
					icon="edit" theme="field" 
					type="text" disabled="true"
					name="textfield" :value="editCount(value)" />
				<k-button theme="negative" alt="Clear" @click="clearEdits">Clear</k-button>
			</k-field>
			`
		},
		photos: {
			props: {
				label: String,
				help: String,
				value: String
			},
			methods: {
				clearPhotos() {
					this.$store.dispatch("content/update", ["photos", ""]);
					// this.$store.dispatch("content/save");
				},
				photoCount(val) {
					var photos = val ? val.split(';').length - 1 : 0;
					return photos;
				}
			},
			template: `
			<k-field class="k-flags-field" :label="label" :help="help">
				<k-input 
					icon="image" theme="field" 
					type="text" disabled="true"
					name="textfield" :value="photoCount(value)" />
				<k-button theme="negative" alt="Clear" @click="clearPhotos">Clear</k-button>
			</k-field>
			`
		},
	}
});