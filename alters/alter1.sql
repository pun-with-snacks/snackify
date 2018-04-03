CREATE TABLE "User" (
	"_id" serial NOT NULL,
	"gitHandle" TEXT NOT NULL UNIQUE,
	"votesRemaining" integer NOT NULL UNIQUE,
	"electsRemaining" integer NOT NULL UNIQUE,
	"isAdmin" BOOLEAN NOT NULL,
	CONSTRAINT User_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "FoodItem" (
	"_id" serial NOT NULL,
	"foodName" TEXT NOT NULL,
	" imgUrl" TEXT NOT NULL,
	"price" FLOAT NOT NULL,
	"comment" TEXT NOT NULL,
	CONSTRAINT FoodItem_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "AdminRules" (
	"weeklyBudget" FLOAT NOT NULL,
	"votesPerUser" integer NOT NULL,
	"electsPerUser" integer NOT NULL,
	"startTime" DATETIME NOT NULL,
	"endTime" DATETIME NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Comment" (
	"_id" serial NOT NULL,
	"userId" integer NOT NULL,
	"foodItemId" integer NOT NULL,
	"weeklySessionId" integer NOT NULL,
	"message" TEXT NOT NULL,
	"messageOrder" integer NOT NULL,
	CONSTRAINT Comment_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "WeeklyHistory" (
	"_id" serial NOT NULL,
	"totalBudget" FLOAT NOT NULL,
	CONSTRAINT WeeklyHistory_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "VotingStore" (
	"_id" serial NOT NULL,
	"weekId" integer NOT NULL,
	"foodItemId" integer NOT NULL,
	"firstVoterId" integer NOT NULL,
	"totalVotes" integer NOT NULL,
	CONSTRAINT VotingStore_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "VotingStore" ADD CONSTRAINT "VotingStore_fk0" FOREIGN KEY ("weekId") REFERENCES "WeeklyHistory"("_id");
ALTER TABLE "VotingStore" ADD CONSTRAINT "VotingStore_fk1" FOREIGN KEY ("foodItemId") REFERENCES "FoodItem"("_id");
ALTER TABLE "VotingStore" ADD CONSTRAINT "VotingStore_fk2" FOREIGN KEY ("firstVoterId") REFERENCES "User"("_id");
