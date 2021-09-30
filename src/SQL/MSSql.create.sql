



CREATE TABLE [Speaker] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [surname] VARCHAR(255)  NULL,

	 [firstname] VARCHAR(255)  NULL,

	 [secondname] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Meetingrequest] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [requestdate] DATETIME  NULL,

	 [Speaker_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Book_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Meetingplan_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Meetingplan] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [plandate] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Report] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [reportdate] DATETIME  NULL,

	 [booklevel] INT  NULL,

	 [presentationURL] VARCHAR(255)  NULL,

	 [videoURL] VARCHAR(255)  NULL,

	 [review] VARCHAR(255)  NULL,

	 [Speaker_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Book_m0] UNIQUEIDENTIFIER  NOT NULL,

	 [Meeting_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Book] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [tittle] VARCHAR(255)  NULL,

	 [author] VARCHAR(255)  NULL,

	 [pages] INT  NULL,

	 [coverURL] VARCHAR(255)  NULL,

	 [descriptionURL] VARCHAR(255)  NULL,

	 [tags] VARCHAR(255)  NULL,

	 [score] FLOAT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Meeting] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [meetingdate] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [Meetingrequest] ADD CONSTRAINT [Meetingrequest_FSpeaker_0] FOREIGN KEY ([Speaker_m0]) REFERENCES [Speaker]
CREATE INDEX Meetingrequest_ISpeaker_m0 on [Meetingrequest] ([Speaker_m0])

 ALTER TABLE [Meetingrequest] ADD CONSTRAINT [Meetingrequest_FBook_0] FOREIGN KEY ([Book_m0]) REFERENCES [Book]
CREATE INDEX Meetingrequest_IBook_m0 on [Meetingrequest] ([Book_m0])

 ALTER TABLE [Meetingrequest] ADD CONSTRAINT [Meetingrequest_FMeetingplan_0] FOREIGN KEY ([Meetingplan_m0]) REFERENCES [Meetingplan]
CREATE INDEX Meetingrequest_IMeetingplan_m0 on [Meetingrequest] ([Meetingplan_m0])

 ALTER TABLE [Report] ADD CONSTRAINT [Report_FSpeaker_0] FOREIGN KEY ([Speaker_m0]) REFERENCES [Speaker]
CREATE INDEX Report_ISpeaker_m0 on [Report] ([Speaker_m0])

 ALTER TABLE [Report] ADD CONSTRAINT [Report_FBook_0] FOREIGN KEY ([Book_m0]) REFERENCES [Book]
CREATE INDEX Report_IBook_m0 on [Report] ([Book_m0])

 ALTER TABLE [Report] ADD CONSTRAINT [Report_FMeeting_0] FOREIGN KEY ([Meeting_m0]) REFERENCES [Meeting]
CREATE INDEX Report_IMeeting_m0 on [Report] ([Meeting_m0])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

